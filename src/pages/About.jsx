import React from 'react'
import '../css/about.css'
import pfp from "../photos/2x2.jpg"
import TechStack from '../components/techStack';


const About = () => {
  return (
    <div className="about-container">
      <div className="about1">
        <div className="main-hexagon">
          <img src={pfp} />
          <div className="tiny-hex tiny-hexagon1"></div>
          <div className="tiny-hex tiny-hexagon2"></div>
          <div className="tiny-hex tiny-hexagon3"></div>
        </div>
      </div>

      <div className="about2">
        <div className="about-details sm:block grid justify-center">
          <h1 className="font-bold sm:flex text-center">ABOUT ME</h1>
          <div className="text sm:w-[45rem] sm:leading-normal sm:text-[1.2rem] text-xs w-full">
            Hi! My name is Axellerosh A MERN stack developer that has 3 years of
            coding experience. I enjoy making beautiful animated websites that
            are responsive and interactive. I love helping my clients and
            working with people in general. I look forward to working with you
            making beautiful website with responsiveness, interactivity and
            backend services.
          </div>
        </div>
        <div className="tech-stack-details">
          <h1 className="font-bold">TECH STACK</h1>
          <div className="tech-stack sm:grid-cols-6 grid-cols-4">
            <TechStack />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About