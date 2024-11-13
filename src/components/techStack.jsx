import React from 'react'
import { Stack } from "../photos/stack/stack";

function TechStack() {
  return (
    <>
      {Stack.map((tech, index) => (
        <div key={index} className="stack sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] grid content-center">
          <img className="sm:w-[5vw] sm:h-[5vw] sm:scale-100 w-[28px] scale-150" src={tech.image} alt={tech.name} />
          <p className='sm:text-xl text-[12px]'>{tech.name}</p>
        </div>
      ))}
    </>
  );
}

export default TechStack