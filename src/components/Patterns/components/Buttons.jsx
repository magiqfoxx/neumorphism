import styled from "styled-components";

export const Buttons = styled.div.attrs({
  "styled-component": "Buttons",
})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  grid-gap: 0.5rem;
  width: fit-content;
`;

export default Buttons;
