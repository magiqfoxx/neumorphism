import React from "react";
import styled from "styled-components";

const StyledText = styled.p.attrs({
  "data-styled-component": "Text",
})`
  ${(props) =>
    props.inset
      ? `color: #a9a9a9;
    text-shadow: 0 0 1px #3333333b, 1px 1px 2px #ffffff;
    font-weight: 100;`
      : `text-shadow: 3px 2px 5px #00000061;
    color: black;`};
  ${(props) =>
    props.boldedOutset &&
    `-webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #d6d6d6;
    color: white;
    text-shadow: 1px 1px 1px #7a7a7a;
    `};
`;
const Text = ({ inset, children, className }) => {
  return (
    <StyledText inset={inset} className={className}>
      {children}
    </StyledText>
  );
};

export default Text;
