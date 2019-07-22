module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  automock: false,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    }
  },
  moduleNameMapper: {
    "@util/(.*)": "<rootDir>/src/util/$1",
    "@model/(.*)": "<rootDir>/src/model/$1",
    "@mock/(.*)": "<rootDir>/src/mock/$1",
  }
};
