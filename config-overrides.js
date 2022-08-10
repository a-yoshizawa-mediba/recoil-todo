const path = require('path');

module.exports = (config) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@Store/*": path.resolve("./src/store/*"),
      "@Components/*": path.resolve("./src/components/*"),
    },
  };

  return config;
}