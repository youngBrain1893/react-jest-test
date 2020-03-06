const babelJest = require('babel-jest');

const transform = babelJest.createTransformer({
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-transform-modules-commonjs']
})

module.exports = transform;
