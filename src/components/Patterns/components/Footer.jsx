import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer.attrs({
  "data-styled-component": "Footer",
})`
  height: 2rem;
  text-align: center;
`;

const Footer = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export default Footer;
