export default {
    setupFilesAfterEnv: [
      "<rootDir>/src/test/jestSetup.ts"
    ],
    moduleFileExtensions: [
      "js",
      "json",
      "ts"
    ],
    rootDir: ".",
    testRegex: ".(spec|test).ts$",
    transform: {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    testEnvironment: "node",
    collectCoverageFrom: [
      "src/main/**/{!(index),}.(t|j)s"
    ],
    watchPathIgnorePatterns: [
      "node_modules"
    ],
    globalSetup:"<rootDir>/src/test/global-setup.ts",
    coverageDirectory: "coverage",
    coverageThreshold: {
      global: {
        "statements": 100,
        "branches": 100,
        "functions": 100,
        "lines": 100
      }
    }
  }