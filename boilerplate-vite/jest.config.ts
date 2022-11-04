export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'ts-jest',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/svgMock.ts',
  },
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svg.ts',
    '@/(.*)': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
