import React from 'react'
import ViewMore from './ViewMore'
const ProjectComponent = ({image,image2,image3, title, stack, textS, text,stext, link, hubLink, handlePopUp}) => {
  return (
    <div>
        <div className="project1 sm:h-[18.3svw] h-[20svh] project mb-12">
            <div className="grid pl-2 pr-2">
            <div className="">
                 <h2 className="font-bold">{title}</h2>
                 <p className='text-xs font-light'>{stext}</p>
                <a
                  className="underline atag"
                  href="https://github.com/AXODUS21/GSEAS"
                >
                  https://github.com/AXODUS21/GSEAS
                </a>
              </div>
              <div
                className="flex justify-start cursor-pointer"
                onClick={() =>
                  handlePopUp(
                        image,
                        title,
                        stack,
                        textS,
                        text,
                        link,
                        hubLink
                  )
                }
              >
                <ViewMore />
              </div>
            </div>
            <div className="spinning-img-container">
              <img className="spinning-img" src={image} alt="vain" />
              <img className="spinning-img" src={image2} alt="vain" />
              <img className="spinning-img" src={image3} alt="vain" />
              <img className="spinning-img" src={image} alt="vain" />
              <img className="spinning-img" src={image2} alt="vain" />
              <img className="spinning-img" src={image3} alt="vain" />
            </div>
          </div>
    </div>
  )
}

export default ProjectComponent