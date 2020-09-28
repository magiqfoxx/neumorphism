import React from "react";
import styled from "styled-components";

const Label = styled.label.attrs({
  "styled-component": "Label",
})`
  font-family: sans-serif;
  font-size: 2rem;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #d6d6d6;
  color: white;
  text-shadow: 3px 1px 1px #7a7a7a;
  :not(:last-child) {
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }
`;
const StyledInput = styled.input.attrs({
  "styled-component": "Input",
})`
  height: 1.5rem;
  background-color: #e2edf8;
  border-radius: 5px;
  border: 1px solid #e9f2fb;
  padding-left: 0.5rem;
  box-shadow: inset 0px 0px 4px 0px rgb(191, 201, 211),
    inset -1px -1px 2px rgb(255, 255, 255), 1px 1px 3px 0px rgb(191, 201, 211),
    -1px -1px 3px rgba(255, 255, 255, 0.36);
  :focus {
    outline: none;
    background-color: #f0f6fd;
    box-shadow: inset 2px 1px 4px 0px rgb(191, 201, 211),
      inset -1px -1px 2px rgb(255, 255, 255), 1px 1px 3px 0px rgb(191, 201, 211),
      -1px -1px 3px rgba(255, 255, 255, 0.36);
  }
`;

const Input = ({ label, id, ...props }) => {
  return (
    <>
      <Label htmlfor={id}>{label}</Label>
      <StyledInput id={id} name={id} {...props} />
    </>
  );
};

export default Input;
