import styled from "styled-components";

import Text from "../../Text";

export const Room = styled.div.attrs({
  "styled-component": "Room",
})`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RoomName = styled(Text).attrs({
  "styled-component": "RoomName",
})`
  text-transform: uppercase;
  font-size: 0.8rem;
`;
