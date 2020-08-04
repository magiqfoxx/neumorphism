import React from "react";
import styled from "styled-components";

import { ReactComponent as Alert } from "../../assets/icons/alert.svg";
import { ReactComponent as Back } from "../../assets/icons/back.svg";
import { ReactComponent as Block } from "../../assets/icons/block.svg";
import { ReactComponent as Check } from "../../assets/icons/check.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Game } from "../../assets/icons/game.svg";
import { ReactComponent as Hamburger } from "../../assets/icons/hamburger.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as Information } from "../../assets/icons/information.svg";
import { ReactComponent as Key } from "../../assets/icons/key.svg";
import { ReactComponent as Left } from "../../assets/icons/left.svg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import { ReactComponent as Options } from "../../assets/icons/options.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Picture } from "../../assets/icons/picture.svg";
import { ReactComponent as Plane } from "../../assets/icons/plane.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Power } from "../../assets/icons/power.svg";
import { ReactComponent as Reload } from "../../assets/icons/reload.svg";
import { ReactComponent as Text } from "../../assets/icons/text.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { ReactComponent as Zoom } from "../../assets/icons/zoom.svg";

const icons = {
  alert: <Alert />,
  back: <Back/>,
  block: <Block />,
  check: <Check />,
  delete: <Delete />,
  edit: <Edit />,
  game: <Game />,
  hamburger: <Hamburger />,
  heart: <Heart />,
  information: <Information />,
  key: <Key />,
  left: <Left/>,
  location: <Location />,
  options: <Options />,
  phone: <Phone />,
  picture: <Picture />,
  plane: <Plane />,
  plus: <Plus />,
  power: <Power />,
  reload: <Reload />,
  text: <Text />,
  user: <User />,
  zoom: <Zoom />
};
const StyledIcon = styled.div.attrs({
  "data-styled-component": "StyledIcon"
})`
svg{
  width:1.5rem;
  height:1.5rem;
}
`;
const Icon = ({ name }) => {
  return <StyledIcon>{icons[name]}</StyledIcon>;
};

export default Icon;
export const listOfIcons = Object.keys(icons);
