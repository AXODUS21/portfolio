import React, { useRef, useState } from 'react'
import AnimatedTitle from './AnimatedTitle';

const BentoTilt = ({children, className = ''}) => {
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef('');

    const handleMouseMove = (e) => {
        if(!itemRef.current) return;

        const {left, top, width, height } = itemRef.current.getBoundingClientRect()

        const relativeX = (e.clientX - left) /width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`;

        setTransformStyle(newTransform)
    }

    const handleMouseLeave = () => {
        setTransformStyle('');
    }

    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform: transformStyle}}>
            {children}
        </div>
    )
}

const BentoCard = ({src, title}) => {
    
    return (
      <div className="relative size-full ">
        <video
          src={src}
          loop
          muted
          autoPlay
          playsInline
          className="absolute left-0 top-0 size-full object-center"
        />
        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-yellow-300">
          <div>
            <h1 className="bento-title special-font">{title}</h1>
          </div>
        </div>
      </div>
    );
}

const Projects = () => {
  return (
    <section id="projects" className="bg-black pb-52 ">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32 ">
          <p className="special-font bento-title text-4xl text-blue-50 text-center">
            <AnimatedTitle title="Pr<b>o</b>jects" />
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                 Gse<b>a</b>s
              </>
            }
            description={
              "A Website For A Local Dental Clinic Located In Candelaria Philippines. Made with NextJs With Fast Image Processing Supported By Vercel."
            }
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 md:grid-rows-2 gap-7 mb-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <>
                  AG d<b>e</b>ntal
                </>
              }
              description={
                "A Live Chat Web App Made with NextJS and MongoDB. Uses Socket.io And Render For The Live Functionality"
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <>
                  E<b>m</b>erse
                </>
              }
              description={
                "An Ecommerce Website Made with React and MongoDB. With An Implementation Of The Paypal API For Payment Integration."
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  De<b>a</b>lership
                </>
              }
              description={
                "A Store Type Website Where An Admin Can Post Different Products For People That Want To Buy Cars. Uses Google Auth And It Has A Favorite Function."
              }
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
}

export default Projects