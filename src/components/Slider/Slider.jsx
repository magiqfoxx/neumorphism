import React, { useState } from "react";
import styled from "styled-components";

const StyledSlider = styled.input.attrs({
  "styled-component": "Slider",
})`
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  height: 1.5rem;
  background-color: #e2edf8;
  border-radius: 5px;
  border: 1px solid #e9f2fb;
  border: none;
  box-shadow: inset 1px 1px 3px rgb(167 189 212),
    inset -6px -6px 6px rgba(255, 255, 255, 0.95),
    inset 1px 1px 10px rgb(114 134 154);
  border-radius: 100px;
  height: 2.5rem;
  width: -webkit-fill-available;
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
  ::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 3rem;
    height: 2.5rem;
    border-radius: 100px;
    background-color: rgb(225, 237, 248);
    box-shadow: 2px 1px 5px 0px rgb(191, 201, 211),
      -2px -2px 3px rgb(255, 255, 255);
    cursor: pointer;
  }

  ::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #4caf50; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }
`;

const Slider = ({ min = 1, max = 100, startValue = 50, ...props }) => {
  const [value, setValue] = useState(startValue);
  return (
    <div>
      <StyledSlider
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </div>
  );
};

export default Slider;
