import React from 'react'
import cert from "../photos/jscert.png"
import client1 from "../photos/socials/client1.png"
import client2 from "../photos/socials/client2.jpg"

const Testimonials = () => {
  return (
    <div className="sm:flex grid gap-16 px-10 justify-center sm:pt-10">
      <div className="sm:grid flex sm:gap-16 gap-5 sm:w-1/2 w-full">
        <div className="sm:text-5xl text-2xl font-bold text-center">
          CERTIFICATES & TESTIMONIALS
        </div>
        <div className="flex justify-center">
          <img className="sm:h-5/6" src={cert} />
        </div>
      </div>
      <div className="testimonials-right sm:w-1/2 sm:gap-0 gap-4 sm:grid flex ">
        <div className="text-center sm:text-lg text-xs ">
          "He worked hard to accomplish the task at hand very easy to
          communicate with and he even accommodated when I keep asking for
          changes within the website"
          <span className="flex justify-center mt-10 items-center gap-5">
            <img src={client1} className="h-16 rounded-full" />
            Jowel Stephen M. Cuevas
          </span>
        </div>
        <div className="text-center sm:text-lg text-xs ">
          "Our project had specific requirements and a tight deadline, and He
          managed everything with great efficiency. He took the time to
          understand our vision and translated it into a stunning website that
          perfectly represents our brand. The design is modern and responsive."
          <span className="flex justify-center mt-10 items-center gap-5">
            <img src={client2} className="h-16 rounded-full" />
            Christian Dimac
          </span>
        </div>
      </div>
    </div>
  );
}

export default Testimonials