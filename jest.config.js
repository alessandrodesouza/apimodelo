const { resolve } = require('path');

const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  displayName: 'testes-de-unidade',
  testMatch: ['<rootDir>/src/**/*.test.js'],
  testEnvironment: 'node',
  clearMocks: true,
};
