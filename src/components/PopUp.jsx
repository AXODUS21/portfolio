import React from 'react'
import { Stack } from '../photos/stack/stack';
import github from '../photos/socials/github.png'
import link from '../photos/socials/link.png'

const PopUp = ({popUp, details, setPopUp}) => {

  console.log(details)
  return (  
    <div className='relative'>
      <div
        className="popup w-4/5 h-5/6 p-0"
        style={{
          transform: `translate(${popUp ? "-50%, -30%" : "-50%,100%"})`,
          zIndex: `${popUp ? "9999" : "0"}`,
        }}
      >
      <div className="absolute blur-[6.3px] z-[-10]">
          <img className="h-full rounded-xl" src={details.image} />
      </div>
        
        <div className="pop-up-content p-8">
          <p className={`text-${details.TextStyle} flex justify-center font-bold text-4xl`}>{details.title}</p>
          <div className="popup-content p-10 flex w-full gap-40">
            <p className={`text-${details.TextStyle} font-bold`}>{details.description}</p>
            <div className='grid gap-6 w-[20%]'>
                {details.techStacks.map((techStack) => {
                  let toDisplay = '';
                      for (let i = 0; i < Stack.length; i++) {
                          if(Stack[i].name === techStack){
                             toDisplay = Stack[i].image;
                          }
                      }

                      return (
                        <img
                          className="w-11 h-10"
                          src={toDisplay}
                          alt={Stack.name}
                        />
                      );
                })}
            </div>
          </div>
        </div>
        <button
          className="popup-close text-black absolute right-[-20px] bg-red-700 px-[16px] py-[10px] top-[-20px] rounded-full font-bold hover:rotate-[30deg] transition-all"
          onClick={() => setPopUp(false)}
        >
          X
        </button>
        <div className="links flex gap-5 absolute bottom-20 left-10">
          <a href={details.hubLink} className="z-[999] cursor-pointer" target='blank'>
            <div className="bg-white p-3 rounded-full">
              <img src={github} className='h-10 w-10'/> 
            </div>
          </a>

          <a href={details.link} className="z-[999] cursor-pointer" target='blank'>
            <div className="bg-white p-3 rounded-full">
              <img src={link} className='h-10 w-10'/> 
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PopUp