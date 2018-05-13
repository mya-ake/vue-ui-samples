module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/app/$1',
    '^~~/(.*)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/app/$1',
  },
}
