export default {
  rootDir: "src",
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["../setupTests.ts"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        diagnostics: {
          ignoreCodes: [1343, 6133],
        },
        astTransformers: {
          before: [
            {
              path: "node_modules/ts-jest-mock-import-meta",
              options: {
                metaObjectReplacement: {},
              },
            },
          ],
        },
      },
    ],
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "<rootDir>/../styleMock.ts",
    "^@/(.*)$": "<rootDir>/$1",
  },
};
