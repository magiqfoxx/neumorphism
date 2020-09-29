const path = require("path");
const webpack = require("webpack");
const fs = require("fs");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");

module.exports = {
  webpack: function (config, env) {
    if (!config.plugins) {
      config.plugins = [];
    }
    config.plugins.push(
      new SVGSpritemapPlugin(
        path.resolve(__dirname, "./src/assets/icons/*.svg"),
        { output: { filename: "spritemap.svg" } }
      )
    ),
      config.plugins.push(
        new webpack.DefinePlugin({
          SVG_LIST: fs.readdir(
            path.resolve(__dirname, "./src/assets/icons"),
            (err, files) => {
              return files.map((file) => file.slice(0, -4));
            }
          ),
        })
      );
    return config;
  },
};
