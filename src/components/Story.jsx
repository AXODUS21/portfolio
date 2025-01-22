import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'
import AG from "/img/client3.png"
import client1 from "/img/client1.png"
import client2 from "/img/client2.jpg"

const Story = () => {

 const testimonials = [
  {
    img: AG,
    name: 'AG Dental Clinic',
    testimony: "AG Dental Clinic had clear requirements and a strict deadline, which he handled with remarkable efficiency. He took the time to understand our vision and transformed it into a beautiful website that truly reflects our practice. The design is sleek, contemporary, and fully responsive, ensuring accessibility for all our patients.",
  },
  {
    img: client1,
    name: 'Jowel Stephen M. Cuevas',
    testimony: "He worked hard to accomplish the task at hand very easy to communicate with and he even accommodated when I keep asking for changes within the website",
  },
  {
    img: client2,
    name: 'Christian Dimac',
    testimony: "Our project had specific requirements and a tight deadline, and He managed everything with great efficiency. He took the time to understand our vision and translated it into a stunning website that perfectly represents our brand. The design is modern and responsive."
,
  },
]

  return (
    <div
      id="testimonials"
      className="min-h-dvh w-screen bg-black text-blue-50 "
    >
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase">Testimonials</p>
        <AnimatedTitle
          title="What Th<b>e</b>y say about<br/> my w<b>o</b>rk"
          sectionId="#testimonials"
          containerClass={
            "mt-5 pointer-events-none mix-blend-difference relative z-10 mb-20"
          }
        />

        <div className="grid lg:grid-cols-3 w-full place-items-center sm:grid-cols-1">
          {testimonials.map((item) => (
            <div className="bg-blue-50 text-black relative w-[400px] h-[400px] rounded-md border-2 border-slate-900">
              <img src={item.img} className='rounded-full absolute -top-10 right-40 w-20 border-2 border-slate-900'/>
              <div className="pt-16 text-center mb-10 font-general font-bold">
                {item.name}
              </div>
              <div className="text-center px-7 font-circular-web">
                {item.testimony}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Story