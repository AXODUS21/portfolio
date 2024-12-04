import React from 'react'

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
                  {hubLink}
                </a>
              </div>
              <div
                className="flex justify-start cursor-pointer text-xs hover:bg-black hover:text-white trnasition-all duration-500 font-bold w-fit h-fit rounded-full px-3 py-2 bg-white text-black "
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
                SEE MORE
              </div>
            </div>
            <div className="spinning-img-container lg:grid hidden">
              <img className="spinning-img" src={image} />
              <img className="spinning-img" src={image2} />
              <img className="spinning-img" src={image3} />
              <img className="spinning-img" src={image} />
              <img className="spinning-img" src={image2} />
              <img className="spinning-img" src={image3} />
            </div>
          </div>
    </div>
  )
}

export default ProjectComponent