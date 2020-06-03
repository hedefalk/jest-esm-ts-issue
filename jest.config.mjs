export default {
  coverageDirectory: "coverage",

  verbose: true,
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      packageJson: "package.json",
      tsConfig: "<rootDir>/tsconfig.json",
      diagnostics: true,
    },
  },
  moduleFileExtensions: ["js", "ts"],
  testEnvironment: "node",
}
