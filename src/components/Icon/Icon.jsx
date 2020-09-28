import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const listOfIcons = [];

const sizes = {
  tiny: 20,
  small: 30,
  medium: 50,
  large: 80,
};
const colors = {
  primary: "#fa9191",
  secondary: "#ffe9c5",
  white: "white",
  tertiary: "#607d8b",
};
const StyledSvg = styled.svg.attrs({
  "data-styled-component": "Svg",
})`
  width: ${({ size }) => sizes[size]}px;
  height: ${({ size }) => sizes[size]}px;
  fill: inherit;
  vertical-align: middle;
  &:hover {
    fill: grey;
    fill: ${({ hovered }) => colors[hovered]};
  }
  use {
    width: 100%;
    height: 100%;
    fill: black;
  }
`;
export const names = process.env.SVG_LIST;

export const variants = [
  "primary",
  "secondary",
  "accent",
  "neutral",
  "error",
  "success",
  "disabled",
];
const Icon = ({
  name,
  size = "medium",
  color = "black",
  hovered,
  className,
}) => {
  return (
    <StyledSvg
      size={size}
      color={color}
      hovered={hovered}
      className={className}
    >
      <use
        xlinkHref={`${process.env.PUBLIC_URL}/spritemap.svg#sprite-${name}`}
      />
    </StyledSvg>
  );
};

export default Icon;

Icon.propTypes = {
  variant: PropTypes.oneOf([...variants]),
  // name: PropTypes.oneOf(names),
  size: PropTypes.oneOf([...Object.keys(sizes)]),
};
