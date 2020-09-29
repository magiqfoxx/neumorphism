import React from "react";
import styled from "styled-components";

import Icon from "../Icon";

const Wrapper = styled.div.attrs({
  "styled-component": "Wrapper",
})`
  position: relative;
`;

const Label = styled.label.attrs({
  "styled-component": "Label",
})`
  font-family: sans-serif;
  color: rgba(0, 0, 0, 0.4);
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
  padding-left: ${(props) => (props.withIcon ? "3rem" : "1rem")};
  border: none;
  box-shadow: inset 1px 1px 3px rgb(167 189 212),
    inset -6px -6px 6px rgba(255, 255, 255, 0.95),
    inset 1px 1px 10px rgb(114 134 154);
  border-radius: 100px;
  height: 2.5rem;
  width: -webkit-fill-available;
  ::placeholder {
    text-transform: uppercase;
    color: rgb(191, 201, 211);
    font-family: system-ui;
    font-weight: 100;
    font-size: 0.6rem;
  }
  :focus {
    outline: none;
    background-color: #f0f6fd;
    box-shadow: inset 2px 1px 4px 0px rgb(191, 201, 211),
      inset -1px -1px 2px rgb(255, 255, 255), 1px 1px 3px 0px rgb(191, 201, 211),
      -1px -1px 3px rgba(255, 255, 255, 0.36);
  }
`;
const StyledIcon = styled(Icon).attrs({
  "styled-component": "Icon",
})`
  position: absolute;
  top: 9px;
  left: 18px;
  fill: rgb(191, 201, 211);
`;

const Input = ({ label, id, icon, ...props }) => {
  return (
    <>
      <Label htmlfor={id}>{label}</Label>
      <Wrapper>
        <StyledInput id={id} name={id} withIcon={!!icon} {...props} />
        {icon && <StyledIcon name={icon} color="tertiary" size="tiny" />}
      </Wrapper>
    </>
  );
};

export default Input;
