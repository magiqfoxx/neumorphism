import React from 'react';
import styled from "styled-components";
import colors from "../../../tokens/colors";

const StyledMobile = styled.div.attrs({
  "data-styled-component": "Mobile"
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 320px;
  height:480px;
  background-color: ${colors.light};
  border-radius: 7%;
  padding:2rem;
  box-sizing: border-box;
  box-shadow: 8px 7px 17px 0px rgb(191,201,211), -2px -1px 12px 0px rgb(255,255,255);
`;

const Mobile = ({children}) => {
    return ( <StyledMobile>{children}</StyledMobile> );
}
 
export default Mobile;