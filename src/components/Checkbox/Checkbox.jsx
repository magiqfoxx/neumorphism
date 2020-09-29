import React, { useState } from "react";
import styled from "styled-components";

//ADD ANIMATION?
const StyledLabel = styled.label.attrs({
  "data-styled-component": "StyledLabel",
})``;
const Box = styled.div.attrs({
  "data-styled-component": "Box",
})`
  height: 2rem;
  width: 2rem;
  position: relative;
  cursor: pointer;
  /* background-color: ${(props) =>
    props.checked ? "pink" : "rgb(225, 237, 248)"}; */
    box-shadow: inset 1px 1px 3px rgb(167 189 212), inset -3px -2px 6px rgba(255, 255, 255, 0.95), inset 1px 1px 9px rgb(157 182 207);
    border: 1px solid #e9f2fb;
    border-radius: 8px;
    -webkit-transition: right 3s;
    transition: right 3s;
    background-color: #dceaf7;
`;
const Checkmark = styled.div.attrs({
  "data-styled-component": "Checkmark",
})`
  width: 2rem;
  height: 2rem;
  display: ${(props) => (props.checked ? "block" : "none")};
  color: #fa8072;
  text-shadow: 0px 1px 1px #c64435, -1px -1px 1px white;
  font-size: 2rem;
  text-align: center;
  vertical-align: middle;
  position: absolute;
  top: -5px;
  left: 5px;
  /* clip-path: polygon(45% 64%, 76% 32%, 82% 37%, 45% 75%, 22% 55%, 28% 49%); */
`;
const StyledInput = styled.input.attrs({
  "data-styled-component": "StyledInput",
})`
  display: none;
`;
const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <StyledLabel checked={checked}>
        <Box checked={checked} onClick={() => setChecked(!checked)}>
          <Checkmark checked={checked}>✔</Checkmark>
        </Box>
      </StyledLabel>
      <StyledInput type="checkbox" checked={checked}></StyledInput>
    </>
  );
};

export default Checkbox;
