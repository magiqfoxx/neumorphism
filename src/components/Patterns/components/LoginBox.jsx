import React from "react";
import styled from "styled-components";

const StyledLoginBox = styled.main.attrs({
  "data-styled-component": "LoginBox",
})`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  width: 100%;
`;

const LoginBox = ({ children }) => {
  return <StyledLoginBox>{children}</StyledLoginBox>;
};

export default LoginBox;
