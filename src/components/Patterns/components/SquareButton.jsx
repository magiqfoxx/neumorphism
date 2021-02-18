import styled from "styled-components";
import Button from "../../Button";

export const SquareButton = styled(Button).attrs({
  "styled-component": "SquareButton",
})`
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SquareButton;
