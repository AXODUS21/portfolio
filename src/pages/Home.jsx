import React from 'react'
import '../css/home.css'
import Loader from '../components/Loader'
import Button from '../components/Scroll';

const Home = () => {
  return (
    <div className="home-container">
      <main>
        <div className="home-title-container">
          <div className="home-title sm:mb-12 mb-1">
            <p className="text-shine">
              <span className="sm:text-8xl text-[3.3rem]">AXELLEROSH</span>{" "}
              <span className="sm:inline-block hidden">LUBI</span>
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
    </div>
  );
}

export default Home