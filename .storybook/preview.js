import { addDecorator } from "@storybook/react";
import React from "react";
import GlobalStyles from "../src/components/GlobalStyles";

addDecorator((style) => (
  <>
    <GlobalStyles />
    {style()}
  </>
));
