import React from "react";
import styled from "styled-components";
import Icon from "../Icon";

const boxShadow = (color) => {
  let newColor = "";
  var matchColors = /^rgb\((\d+),(\d+),(\d+)\)$/; //find regex that will ignore spaces
  var colors = color.match(matchColors);
  if (colors) {
    newColor = `rgb(${colors[1] - 34}, ${colors[2] - 36}, ${colors[3] - 37})`;
    return `2px 1px 5px 0px ` + newColor + `, -2px -2px 3px rgb(255,255,255)`;
  }
};
const activeBoxShadow = (color) => {
  let newColor = "";
  var matchColors = /^rgb\((\d+),(\d+),(\d+)\)$/; //find regex that will ignore spaces
  var colors = color.match(matchColors);
  if (colors) {
    newColor = `rgb(${colors[1] - 34}, ${colors[2] - 36}, ${colors[3] - 37})`;
    return (
      `inset 3px 3px 7px ` +
      newColor +
      `, inset -3px -3px 7px rgba(249, 249, 249, 0)`
    );
  }
};

const StyledButton = styled.button.attrs({
  "data-styled-component": "Button",
})`
  display: flex;
  padding: ${(props) => (props.iconOnly ? "0.7rem" : "0.5rem 1rem")};
  cursor: pointer;
  border-radius: ${(props) => (props.iconOnly ? "100%" : "5px")};
  border: none;
  font-size: 1rem;
  background-color: ${(props) =>
    props.color}; /*instead of variant, this could be any color*/
  box-shadow: ${(props) => boxShadow(props.color)};
  svg {
    width: 1.1em;
    height: 1.1em;
  }
  :active {
    box-shadow: ${(props) => activeBoxShadow(props.color)};
  }
  :focus {
    outline: none;
  }
`;
const Text = styled.span.attrs({
  "data-styled-component": "Text",
})`
  margin-top: -1px;
  margin-left: ${(props) => (props.withIcon ? "0.2rem" : "0")};
`;

const Button = ({
  color = "rgb(226, 237, 248)",
  icon,
  children,
  className,
}) => {
  return (
    <StyledButton color={color} iconOnly={!children} className={className}>
      {icon && <Icon name={icon} />}
      {children && <Text withIcon={!!icon}>{children}</Text>}
    </StyledButton>
  );
};

export default Button;
