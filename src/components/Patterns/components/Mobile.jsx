import React from "react";
import styled from "styled-components";
import colors from "../../../tokens/colors";

const StyledMobile = styled.div.attrs({
  "data-styled-component": "Mobile",
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 320px;
  height: 480px;
  background-color: ${colors.light};
  background: ${(props) =>
    props.login &&
    "linear-gradient(148deg, rgb(211 191 204), rgb(225, 237, 248) 57%)"};
  border-radius: 7%;
  padding: 2rem;
  box-sizing: border-box;
  box-shadow: 8px 7px 17px 0px rgb(191, 201, 211),
    -2px -1px 12px 0px rgb(255, 255, 255);
`;

const Mobile = ({ children, login }) => {
  return <StyledMobile login={login}>{children}</StyledMobile>;
};

export default Mobile;
