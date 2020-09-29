const path = require("path");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");

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
    if (!config.plugins) {
      config.plugins = [];
    }
    config.plugins.push(
      new SVGSpritemapPlugin(
        path.resolve(__dirname, "../src/assets/icons/*.svg"),
        { output: { filename: "spritemap.svg" } }
      )
    );
    return config;
  },
};
