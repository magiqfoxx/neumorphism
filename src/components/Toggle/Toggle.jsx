import React from "react";
import styled from "styled-components";
import colors from "../../tokens/colors";

const StyledLabel = styled.label.attrs({
  "data-styled-component": "StyledLabel",
})``;
const Case = styled.div.attrs({
  "data-styled-component": "Case",
})`
  position: relative;
  height: 2rem;
  width: 4rem;
  padding: 0.1em;
  border-radius: 3em;
  box-shadow: ${(props) =>
    props.checked
      ? "inset 3px 3px 7px #bb7373, inset -3px -3px 7px #f9f9f900"
      : "inset 2px 1px 4px 0px rgb(191,201,211), inset -1px -1px 2px rgb(255,255,255)"};
  background-color: ${(props) =>
    props.checked ? colors.active : "transparent"};
  transition: background-color 0.2s ease-in;
`;
const Lever = styled.div.attrs({
  "data-styled-component": "Lever",
})`
  position: absolute;
  right: ${(props) => (props.checked ? "1px" : "auto")};
  height: 1.8em;
  width: 1.8em;
  border-radius: 100%;
  background-color: rgb(225, 237, 248);
  box-shadow: ${(props) =>
    props.checked
      ? "inset 2px 1px 4px 0px rgb(191,201,211), inset -1px -1px 2px rgb(255,255,255), 1px 1px 3px 0px rgb(191,201,211), -1px -1px 3px rgba(255, 255, 255, 0.36)"
      : "inset 2px 1px 4px 0px rgb(191, 201, 211), inset -1px -1px 2px rgb(255, 255, 255), 1px 1px 3px 0px rgb(191, 201, 211),-1px -1px 3px rgb(255, 255, 255)"};
  border: 1px solid #e9f2fb;
  transition: right 3s;
  /*inset 0px 0px 0px 0px #f6f9fc, inset 0px 0px 20px 0px #ffffff, 1px 1px 3px 0px rgb(143, 163, 183), -1px -1px 3px rgba(255,255,255,0.36);*/
`;
const StyledInput = styled.input.attrs({
  "data-styled-component": "StyledInput",
})`
  display: none;
`;
const Toggle = ({ checked }) => {
  return (
    <>
      <StyledLabel checked={checked}>
        <Case checked={checked}>
          <Lever checked={checked}></Lever>
        </Case>
      </StyledLabel>
      <StyledInput type="checkbox" checked={checked}></StyledInput>
    </>
  );
};

export default Toggle;
