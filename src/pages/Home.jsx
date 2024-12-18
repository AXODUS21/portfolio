import React from 'react'
import '../css/home.css'
import Loader from '../components/Loader'
import chevron from "../photos/chevron.png"
import Button from '../components/Scroll';

const Home = () => {
  return (
    <div className="home-container">
      <main>
        <div className="home-title-container">
          <div className="home-title sm:mb-12 mb-1">
            <p className="text-shine">
              <span className="md:text-8xl text-[2.8rem]">AXELLEROSH</span>{" "}
              <span className="lg:inline-block text-8xl hidden">LUBI</span>
            </p>
            <p className="home-subtitle">Portfolio website</p>
          </div>
        </div>
        <div className="loader">
          <Loader />
        </div>

      </main>
      <div className="scroll">
        <Button />
      </div>
      <div className="text-center text-sm sm:hidden block">
        <div className="flex justify-center gap-3">
          <img src={chevron} alt="chevron" className='rotate-90' />
              Drag The Screen Slowly To Scroll
          <img src={chevron} alt="chevron" className='rotate-[270deg]' />
        </div>
      </div>
    </div>
  );
}

export default Home