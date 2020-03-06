module.exports = {
  rootDir: __dirname,
  moduleNameMapper: {
    'pages(.*)': '<rootDir>/src/pages$1'
  },
  transformIgnorePatterns: [
    '\\\/node_modules\\\/?!(zent|@zent/compat)'
  ],
  transform: {
    '\\.[tj]sx?': '<rootDir>/jest.transform.js',
  },
  coverageDirectory: '<rootDir>/__test__/coverage'
}
