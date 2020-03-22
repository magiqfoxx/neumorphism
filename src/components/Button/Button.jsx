import React from "react";
import styled from "styled-components";
import variants from "./variants";
import Icon from "../Icon";

const StyledButton = styled.button.attrs({
  "data-styled-component": "Button"
})`
  display: flex;
  padding: ${props => (props.iconOnly ? "0.7rem" : "0.5rem 1rem")};
  cursor: pointer;
  border-radius: ${props => (props.iconOnly ? "100%" : "5px")};
  border: none;
  font-size: 1rem;
  ${props => variants[props.variant]}
  svg {
    width: 1.1em;
    height: 1.1em;
  }
`;
const Text = styled.span.attrs({
  "data-styled-component": "Text"
})`
  margin-top: -1px;
  margin-left: ${props => (props.withIcon ? "0.2rem" : "0")};
`;

const Button = ({ variant, icon, children }) => {
  return (
    <StyledButton variant={variant} iconOnly={!children}>
      {icon && <Icon name={icon} />}
      {children && <Text withIcon={!!icon}>{children}</Text>}
    </StyledButton>
  );
};

export default Button;
