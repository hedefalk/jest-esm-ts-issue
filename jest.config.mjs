import babel from "./babel.config.cjs"

export default {
  coverageDirectory: "coverage",

  verbose: true,
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      babelConfig: babel,
      packageJson: "package.json",
      tsConfig: "<rootDir>/tsconfig.json",
      diagnostics: true,
    },
  },
  moduleFileExtensions: ["js", "ts"],
  testEnvironment: "node",
}
