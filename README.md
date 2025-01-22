This is a React Native project bootstrapped with [Kickstarts](https://kickstarts.dev).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

# Project Structure

The project is structured as follows:

```bash
.
├── Gemfile # Ruby dependencies
├── README.md # This file
├── android # Android project
├── app.json # App configuration
├── babel.config.js # Babel configuration
├── eslint.config.mjs # ESLint configuration
├── index.js # Entry point
├── ios # iOS project
├── jest.config.js # Jest configuration
├── metro.config.js # Metro configuration
├── package.json # Project dependencies
├── scripts # Custom scripts
├── src # Source code
│   ├── App.tsx # Main app component
│   ├── components # Components
│   ├── config # Configuration
│   ├── constants # Constants
│   ├── global.css # Global styles
│   ├── hooks # Custom hooks
│   ├── navigation # Navigation Stack
│   ├── providers # Providers
│   ├── reactotron.config.ts # Reactotron configuration
│   ├── resources # Resources
│   ├── screens # Screens
│   ├── theme # Theme
│   ├── translations # Translations
│   └── utils # Utilities
├── tsconfig.json # TypeScript configuration
├── vendor # Vendor files
└── yarn.lock # Yarn lockfile

```

## Rules

- All new components should be added to the `src/components` directory.
- All new screens should be added to the `src/screens` directory.
- All new hooks should be added to the `src/hooks` directory.
- All new navigation should be added to the `src/navigation` directory.
- All new providers should be added to the `src/providers` directory.
- All new utils should be added to the `src/utils` directory.
- All new config should be added to the `src/config` directory.
- All new constants should be added to the `src/constants` directory.
- All new translations should be added to the `src/translations` directory.
- All new resources should be added to the `src/resources` directory.

# Tech Stack

The following is the tech stack used in this project.

| Library                                                                   | Version |
| ------------------------------------------------------------------------- | ------- |
| [React Native](https://reactnative.dev)                                   | v0.77   |
| [React](https://reactjs.org)                                              | v18     |
| [TypeScript](https://www.typescriptlang.org)                              | v5.0.4  |
| [React Navigation](https://reactnavigation.org)                           | v6.1.0  |
| [RN Reanimated](https://github.com/kmagiera/react-native-gesture-handler) | v3      |
| [MMKV](https://github.com/mrousavy/react-native-mmkv)                     | v2      |
| [Tanstack Query](https://tanstack.com/query)                              | v5      |
| [Reactotron RN](https://github.com/infinitered/reactotron)                | v5.1.12 |
| [Hermes](https://hermesengine.dev)                                        | v1      |
| [Jest](https://jestjs.io)                                                 | v29.6.3 |
| [Maestro](https://maestro.mobile.dev)                                     | v1      |
| [dayjs](https://day.js.org)                                               | v1      |
| [Zod](https://zod.dev)                                                    | v3.24.1 |
| [ESlint](https://eslint.org)                                              | v8.57.1 |
| [Prettier](https://prettier.io)                                           | v3.3.3  |

# Reporting Bugs / Getting Help

You can report bugs or get help by using the [GitHub Issues](https://github.com/kickstarts/ks-react-native/issues) or [GitHub Discussions](https://github.com/kickstarts/ks-react-native/discussions).

# Contributing to Kickstarts

Want to contribute to Kickstarts? Check out the contributing guide for more info on how to work with the codebase.

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
