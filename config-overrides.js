const path = require('path');

module.exports = function override(config) {
  // Add fallback options for missing modules
  config.resolve.fallback = {
    zlib: require.resolve('browserify-zlib'),
    path: require.resolve('path-browserify'),
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    timers: require.resolve('timers-browserify'),
    http: require.resolve('stream-http'),
  };

  return config;
};
