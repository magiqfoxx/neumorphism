import React, { useState } from "react";
import styled from "styled-components";

const sizes = {
  small: {
    height: "1rem",
    "slider-thumb-height": "1.2rem",
    "slider-thumb-width": "4rem",
  },
  medium: {
    height: "2rem",
    "slider-thumb-height": "2.5rem",
    "slider-thumb-width": "2rem",
  },
  large: {
    height: "2.5rem",
    "slider-thumb-height": "3rem",
    "slider-thumb-width": "3rem",
  },
};
const StyledSlider = styled.input.attrs({
  "styled-component": "Slider",
})`
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  height: ${(props) => sizes[props.size].height};
  background-color: #e2edf8;
  border-radius: 5px;
  border: 1px solid #e9f2fb;
  border: none;
  box-shadow: inset 1px 1px 3px rgb(167 189 212),
    inset -6px -6px 6px rgba(255, 255, 255, 0.95),
    inset 1px 1px 10px rgb(114 134 154);
  background: linear-gradient(139deg, #dceaf7 50%, rgb(255 255 255 / 57%));
  border-radius: 100px;
  width: -webkit-fill-available;
  outline: none; /* Remove outline */
  /* opacity: 0.7; 
  -webkit-transition: 0.2s;  */
  transition: box-shadow 0.2s;
  transform: ${(props) => (props.vertical ? "rotate(90deg)" : "0")};
  margin: ${(props) => (props.vertical ? "3rem" : "auto")};
  :active {
    box-shadow: inset 1px 1px 3px #b72f20,
      inset -5px -3px 3px rgb(255 255 255 / 54%), inset 1px 1px 10px #b72f20;
    background: linear-gradient(139deg, #fa8072 50%, rgb(255 255 255 / 38%));
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: ${(props) => sizes[props.size]["slider-thumb-width"]};
    height: ${(props) => sizes[props.size]["slider-thumb-height"]};
    border-radius: 100px;
    background-color: rgb(225, 237, 248);
    box-shadow: 2px 1px 5px 0px rgb(191, 201, 211),
      -2px -2px 3px rgb(255, 255, 255);
    cursor: pointer;
  }

  ::-moz-range-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 3rem;
    height: ${(props) => sizes[props.size]["slider-thumb-height"]};
    border-radius: 100px;
    background-color: rgb(225, 237, 248);
    box-shadow: 2px 1px 5px 0px rgb(191, 201, 211),
      -2px -2px 3px rgb(255, 255, 255);
    cursor: pointer;
  }
`;

const Slider = ({
  size = "medium",
  min = 1,
  max = 100,
  startValue = 50,
  ...props
}) => {
  const [value, setValue] = useState(startValue);
  return (
    <div>
      <StyledSlider
        type="range"
        min={min}
        max={max}
        value={value}
        size={size}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </div>
  );
};

export default Slider;
