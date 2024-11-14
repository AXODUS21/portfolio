import React from "react";
import styled from "styled-components";
import ProjectComponent from "./ProjectComponent";
import ViewMore from "./ViewMore";

const ProjectRadio = ({title, setProjectToOpen, height, stack, details, style ,image, handlePopUp, link, hubLink}) => {

    const handleClick = (title) => {
        switch (title.toLowerCase()) {
            case "ileap":
                setProjectToOpen({
                  ileap: 290,
                  Amazon: 60,
                  Emerse: 60,
                  Xelldealership: 60,
                  Vain: 60,
                  Gseas: 60,
                });
             break;
            case "amazon":
                setProjectToOpen({
                  ileap: 60,
                  Amazon: 290,
                  Emerse: 60,
                  Xelldealership: 60,
                  Vain: 60,
                  Gseas: 60,
                });
             break;
            case "emerse":
                setProjectToOpen({
                  ileap: 60,
                  Amazon: 60,
                  Emerse: 290,
                  Xelldealership: 60,
                  Vain: 60,
                  Gseas: 60,
                });
             break;
            case "xelldealership":
                setProjectToOpen({
                  ileap: 60,
                  Amazon: 60,
                  Emerse: 60,
                  Xelldealership: 290,
                  Vain: 60,
                  Gseas: 60,
                });
             break;
            case "vain":
                setProjectToOpen({
                  ileap: 60,
                  Amazon: 60,
                  Emerse: 60,
                  Xelldealership: 60,
                  Vain: 290,
                  Gseas: 60,
                });
             break;
            case "gseas":
                setProjectToOpen({
                  ileap: 60,
                  Amazon: 60,
                  Emerse: 60,
                  Xelldealership: 60,
                  Vain: 60,
                  Gseas: 290,
                });
             break;
        }
    }

  return (
    <StyledWrapper>
      <button
        className="btn-17"
        style={{ height: `${height}px` }}
        onClick={() => handleClick(title)}
      >
        <span className="text-container">
          {height === 290 ? (
            <div className="w-[45vw] h-[290px] p-2">
              <div className="mb-3">
                <img src={image} />
              </div>

              <div className="font-normal text-[8.5px] mb-3 pp">{details}</div>
              <div
                className="extra-details-btn"
                onClick={() =>
                  handlePopUp(image, title, stack, style, details, link, hubLink)
                }
              >
                <ViewMore />
              </div>
            </div>
          ) : (
            <span className="text text-lg">{title}</span>
          )}
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn-17,
  .btn-17 * {
    box-sizing: border-box;
  }

  .btn-17 .pp {
    display: -webkit-box;
    -webkit-line-clamp: 7;
    line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .btn-17 {
    background-color: #000;
    color: #fff;
    cursor: pointer;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-weight: 900;
    padding: 0;
    text-transform: uppercase;
    transition: height 0.5s ease-in-out;
    border: 2px solid #fff; /* Keep the border */
    border-radius: 10px;
    padding: 0.9rem 0.05rem;
    overflow: hidden;
    position: relative;
  }

  .btn-17 .text-container {
    overflow: hidden;
    position: relative;
  }

  .btn-17 .text {
    display: block;
    position: relative;
    transition: transform 0.3s ease-in-out;
  }

  .btn-17 .text.animate {
    transform: translateY(80%);
  }
`;

export default ProjectRadio;
