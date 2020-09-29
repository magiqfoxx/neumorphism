import React from "react";
import styled from "styled-components";
import { headings } from "../../tokens/typography";

const StyledHeading = styled.h1.attrs({
  "styled-component": "Heading",
})`
  font-size: ${(props) => headings[props.importance - 1]}px;
  font-family: sans-serif;
  text-shadow: 3px 2px 5px rgb(114 134 154);
  color: aliceblue;
  font-weight: 100;
`;

const Heading = ({ importance = 1, children }) => {
  return (
    <StyledHeading importance={importance} as={`h${importance}`}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
