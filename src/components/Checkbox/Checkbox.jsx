import React from "react";
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
  /* background-color: ${(props) =>
    props.checked ? "pink" : "rgb(225, 237, 248)"}; */
  box-shadow: inset 2px 1px 4px 0px rgb(191,201,211), inset -1px -1px 2px rgb(255,255,255), 1px 1px 3px 0px rgb(191,201,211), -1px -1px 3px rgba(255, 255, 255, 0.36);
  border: 1px solid #e9f2fb;
  border-radius: 8px;
  transition: right 3s;
`;
const Checkmark = styled.div.attrs({
  "data-styled-component": "Checkmark",
})`
  width: 2rem;
  height: 2rem;
  display: ${(props) => (props.checked ? "block" : "none")};
  color: coral;
  text-shadow: 0px 1px 1px #cc653f9e, -1px -1px 3px white;
  font-size: 2rem;
  text-align: center;
  vertical-align: middle;
  position: absolute;
  top: -3px;
  left: 7px;
  /* clip-path: polygon(45% 64%, 76% 32%, 82% 37%, 45% 75%, 22% 55%, 28% 49%); */
`;
const StyledInput = styled.input.attrs({
  "data-styled-component": "StyledInput",
})`
  display: none;
`;
const Checkbox = ({ checked }) => {
  return (
    <>
      <StyledLabel checked={checked}>
        <Box checked={checked}>
          <Checkmark checked={checked}>✔</Checkmark>
        </Box>
      </StyledLabel>
      <StyledInput type="checkbox" checked={checked}></StyledInput>
    </>
  );
};

export default Checkbox;
