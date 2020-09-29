const path = require("path");
const fs = require("fs");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
const webpack = require("webpack");

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
    config.plugins.push(
      new webpack.DefinePlugin({
        SVG_LIST: fs.readdir(
          path.resolve(__dirname, "../src/assets/icons"),
          (err, files) => {
            return files.map((file) => file.slice(0, -4));
          }
        ),
      })
    );
    return config;
  },
};
