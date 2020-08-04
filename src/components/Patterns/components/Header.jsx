import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.header.attrs({
  "data-styled-component": "Header"
})`
height: 2rem;
`;

const Header = ({children}) => {
    return ( <StyledHeader>{children}</StyledHeader> );
}
 
export default Header;