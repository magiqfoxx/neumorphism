import React from 'react';
import styled from "styled-components";

const StyledNav = styled.nav.attrs({
  "data-styled-component": "Nav"
})`
    display: flex;
    justify-content: space-between;
        align-items: center;

`;

const Nav = ({children}) => {
    return ( <StyledNav>{children}</StyledNav> );
}
 
export default Nav;