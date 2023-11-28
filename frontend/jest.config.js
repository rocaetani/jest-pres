module.exports = {
    resetMocks: true,
    restoreMocks: true,
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect",
        "regenerator-runtime/runtime",
    ],
    watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname",
    ],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "^((contexts|hooks|models|services|ui|utils)/.*)$": "<rootDir>/src/$1"
    }
}
