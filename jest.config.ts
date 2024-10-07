const path = require("path");

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  moduleFileExtensions: ["ts", "js", "json"],
  moduleNameMapper: {
    '^@src/(.*)$': path.resolve(__dirname, 'src/$1'),
  },
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testTimeout:  120000
};