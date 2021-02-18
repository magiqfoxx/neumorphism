import React from "react";
import styled from "styled-components";

const StyledBody = styled.main.attrs({
  "data-styled-component": "Body",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = ({ children }) => {
  return <StyledBody>{children}</StyledBody>;
};

export default Body;
