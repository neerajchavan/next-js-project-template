const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
    './__mocks__/setupServer.js'
  ],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',

    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  moduleFileExtensions: ["js", "jsx"],
};
module.exports = createJestConfig(customJestConfig);