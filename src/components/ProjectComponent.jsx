import React from 'react'
import ViewMore from './ViewMore.jsx'

const ProjectComponent = ({title,image, text, stack,style,handlePopUp, hubLink,link}) => {

  return (
    <>
        <div className="project"> 
            <div className="project-img">
                <img className="rounded-lg" src={image} alt={title} />
            </div>

            <div className="project-description">
              <h2 className='uppercase font-bold'>{title}</h2>
              <a href={hubLink} className='underline'>{hubLink}</a>
            </div>

            <div className="extra-details-btn" onClick={() => handlePopUp(image,title,stack,style,text,link,hubLink)}>
                <ViewMore/>
            </div>
            
        </div>
    </>
  )
}

export default ProjectComponent