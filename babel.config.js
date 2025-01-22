/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
        root: ['./src'],
      },
    ],
    'inline-dotenv',
    'react-native-reanimated/plugin', // needs to be last
  ],
};
