module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  transform: {
    // '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest',
    // '^.+\\.ts?$': '<rootDir>/node_modules/ts-jest',
    // '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    // '^.+\\.js?$': '<rootDir>/node_modules/babel-jest',
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns:["<rootDir>/node_modules/"],
  testRegex: '/__test__/.*\\.(spec|test)\\.(js|jsx|ts|tsx)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
