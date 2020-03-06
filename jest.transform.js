const babelJest = require('babel-jest')

const transform = babelJest.createTransformer({
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    // rc 配置按需加载，否则无法找到， rc 目录无 index 文件
    [require.resolve('babel-plugin-import'), {
      libraryName: '@youzan/react-components',
      libraryDirectory: 'es/components',
      camel2DashComponentName: true,
    }],

    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-modules-commonjs'
  ]
})

module.exports = transform
