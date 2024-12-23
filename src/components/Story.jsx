import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'
import RoundedCorners from './RoundedCorners'
const Story = () => {
    const frameRef = useRef(null);
    const MframeRef = useRef(null);
    const handleMouseLeave = () => {
        const element = frameRef.current;

        gsap.to(element, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.3,
          ease: "power1.inOut",
        });
    }

    const handleMouseMove = (e) => {
        const {clientX, clientY} = e;
        const element = frameRef.current;
      
        if(!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((y - centerY) / centerY) * 10;
        const rotateX = ((x - centerX) / centerX) * -   10;

        gsap.to(element, {
            rotateY,
            rotateX,
            transformPerspective: 500,
            duration: 0.3,
            ease: "power1.inOut"
        })
    }

  return (
    <div id="testimonials" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase">
          Testimonials
        </p>
        <AnimatedTitle
          title="What Th<b>e</b>y say about<br/> my w<b>o</b>rk"
          sectionId="#testimonials"
          containerClass={
            "mt-5 pointer-events-none mix-blend-difference relative z-10"
          }
        />

        <div className="story-img-container">
          <div className="story-img-mask">
            <div className="story-img-content">
              {/*pc image*/}
              <img
                src="/img/entrance.png"
                alt="entrance"
                className="object-fill md:block hidden"
                ref={frameRef}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseLeave}
                onMouseEnter={handleMouseLeave}
                onMouseMove={handleMouseMove}
              />
            </div>
          </div>

          <div className="px-5">
              {/*mobile image*/}
              <img
                src="/img/Mentrance.png"
                alt="entrance"
                className="object-fill md:hidden block"
                ref={MframeRef}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseLeave}
                onMouseEnter={handleMouseLeave}
                onMouseMove={handleMouseMove}
              />
          </div>

          <RoundedCorners />
        </div>
      </div>
    </div>
  );
}

export default Story