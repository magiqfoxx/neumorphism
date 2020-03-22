import React from "react";
import styled from "styled-components";
import { headings } from "../../tokens/typography";

const StyledHeading = styled.h1.attrs({
  "styled-component": "Heading"
})`
  font-size: ${props => headings[props.importance - 1]};
`;

const Heading = ({ importance, children }) => {
  return (
    <StyledHeading importance={importance} as={`h${importance}`}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
