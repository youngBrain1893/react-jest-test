module.exports = {
  rootDir: __dirname,
  moduleNameMapper: {
    '(\\.m)?\\.([s|a])?css$': 'identity-obj-proxy',

    'pages(.*)': '<rootDir>/src/pages$1',
  },
  transformIgnorePatterns: [
    '\\\/node_modules\\\/?!(zent)'
  ],
  transform: {
    '\\.[tj]sx?': '<rootDir>/jest.transform.js',
  },
  coverageDirectory: '<rootDir>/__test__/coverage'
}
