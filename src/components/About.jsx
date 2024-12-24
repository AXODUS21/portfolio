import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center', // will trigger 800px after the center
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })
        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: '0',
        })
    })

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase ">Hello I'm Axelle!</h2>

        <AnimatedTitle title="Thes<b>e</b> are The <br/> tools th<b>a</b>t i use" containerClass={"mt-5 !text-black text-center"} />

        <div className="about-subtext">
          <p>I unite creativity and technology to build seamless.</p>
          <p>Interactive websites that connect people and ideas across the digital world.</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/stack.png"
            alt="background"
            className="absolute left-0 top-0 size-full object-cover md:block hidden"
          />
          <img
            src="img/stack2.png"
            alt="background"
            className="absolute left-0 top-0 size-full object-cover md:hidden block"
          />
        </div>
      </div>
    </div>
  );
}

export default About