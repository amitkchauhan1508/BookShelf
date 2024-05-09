module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node', 'png'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-navigation|@react-navigation)',
  ],
  setupFiles: ['<rootDir>/jest/setup.js'],
};
