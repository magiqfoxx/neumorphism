import React from "react";
import styled from "styled-components";
import Button from "../../Button";

const Hamburger = styled(Button).attrs({
  "data-styled-component": "Hamburger",
})`
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
`;

const Menu = () => {
  return <Hamburger icon="hamburger" />;
};

export default Menu;
