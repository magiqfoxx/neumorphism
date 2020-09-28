const path = require("path");
const custom = require("../config-overrides.js");

module.exports = {
  stories: ["../src/**/*.stories.@(js|mdx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-knobs/register",
    "@storybook/addon-backgrounds/register",
  ],
  webpackFinal: (config) => {
    return {
      ...config,
    };
  },
};
