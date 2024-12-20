import React from "react";
import styled from "styled-components";

const ViewMore = () => {
  return (
    <StyledWrapper>
      <button className="btn-53">
        <div className="original">VIEW</div>
        <div className="letters">
          <span>M</span>
          <span>O</span>
          <span>R</span>
          <span>E</span>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn-53,
  .btn-53 *,
  .btn-53 :after,
  .btn-53 :before,
  .btn-53:after,
  .btn-53:before {
    border: 0 solid;
    box-sizing: border-box;
  }

  .btn-53 {
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    color: #fff;
    cursor: pointer;
    font-size: 100%;
    line-height: 1.5;
    margin: 0;
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
    padding: 0;
  }

  .btn-53:disabled {
    cursor: default;
  }

  .btn-53:-moz-focusring {
    outline: auto;
  }

  .btn-53 svg {
    display: block;
    vertical-align: middle;
  }

  .btn-53 [hidden] {
    display: none;
  }

  .btn-53 {
    border: 1px solid;
    border-radius: 999px;
    box-sizing: border-box;
    display: block;
    font-weight: 900;
    overflow: hidden;
    padding: 7px 20px;
    position: relative;
    text-transform: uppercase;
  }

  .btn-53 .original {
    background: #fff;
    height: 100%;
    color: #000;
    display: grid;
    inset: 0;
    place-content: center;
    position: absolute;
    z-index: 1; /* Added */
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1);
  }

  .btn-53:hover .original {
    transform: translateY(200%);
  }

  .btn-53 .letters {
    display: inline-flex;
    position: relative; /* Added */
    z-index: 2; /* Added */
  }

  .btn-53 span {
    opacity: 0;
    transform: translateY(-15px);
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.2s;
  }

  .btn-53 span:nth-child(2n) {
    transform: translateY(15px);
  }

  .btn-53:hover span {
    opacity: 1;
    transform: translateY(0);
  }

  .btn-53:hover span:nth-child(2) {
    transition-delay: 0.1s;
  }

  .btn-53:hover span:nth-child(3) {
    transition-delay: 0.2s;
  }

  .btn-53:hover span:nth-child(4) {
    transition-delay: 0.3s;
  }

  .btn-53:hover span:nth-child(5) {
    transition-delay: 0.4s;
  }

  .btn-53:hover span:nth-child(6) {
    transition-delay: 0.5s;
  }
`;

export default ViewMore;
