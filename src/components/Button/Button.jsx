import React from "react";
import styled from "styled-components";
import variants from "./variants";
import Icon from "../Icon";

const StyledButton = styled.button.attrs({
  "data-styled-component": "Button",
})`
  display: flex;
  padding: ${(props) => (props.iconOnly ? "0.7rem" : "0.5rem 1rem")};
  cursor: pointer;
  border-radius: ${(props) => (props.iconOnly ? "100%" : "5px")};
  border: none;
  font-size: 1rem;
  border-radius: ${(props) => (props.square ? "5px" : "100px")};
  width: ${(props) => (props.iconOnly ? "auto" : "100px")};
  background: linear-gradient(139deg, #dceaf7 50%, rgb(255 255 255 / 57%));
  font-weight: 100;
  ${(props) => variants[props.variant]}
  svg {
    width: 1em;
    height: 1em;
    fill: rgba(0, 0, 0, 0.4);
  }
`;
const Text = styled.span.attrs({
  "data-styled-component": "Text",
})`
  margin: 0 auto;
  margin-top: -1px;
  margin-left: ${(props) => (props.withIcon ? "0.2rem" : "auto")};
  color: rgba(0, 0, 0, 0.4);
`;

const Button = ({ variant = "light", icon, children, className, square }) => {
  return (
    <StyledButton
      variant={variant}
      iconOnly={!children}
      className={className}
      square={square}
    >
      {icon && <Icon name={icon} size="small" />}
      {children && <Text withIcon={!!icon}>{children}</Text>}
    </StyledButton>
  );
};

export default Button;
