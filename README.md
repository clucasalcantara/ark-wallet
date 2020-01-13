## ARK Mobile Wallet

A mobile wallet project connected to the [ark.io](https://ark.io) ecosystem to manage wallets importation.
<p align="center"><img src="https://user-images.githubusercontent.com/6919712/72203489-f8865980-344a-11ea-8476-3f11f4a8b713.png" width="200px" /></p>

### About the project

This project was developed with [react-native](https://facebook.github.io/react-native/) and uses the atomic design for the components pattern.

### Tech Specs

- [React Native](http://facebook.github.io/react-native/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/)
- [Axios](https://github.com/axios/axios) as HTTP client
- [redux-axios-middleware](https://github.com/svrcekmichal/redux-axios-middleware) to manage requests inside actions implicitly
- [redux](https://redux.js.org/) - As state manager
- [redux-persist](https://github.com/rt2zz/redux-persist) - To persist and rehydarte a redux store
- [redux-logger](https://github.com/LogRocket/redux-logger) - To better display the data flow logs
- [emotion](https://emotion.sh) - As the styled components library
- [prop-types](https://github.com/facebook/prop-types) - to execution time type checking

### Folder Structure

```sh
├── LICENSE
├── README.md
├── android -> Android build folder`
├── babel.config.js
├── index.js -> app entrypoint
├── ios -> iOS build folder
├── metro.config.js
├── node_modules
├── package.json
├── src -> App source files
    ├── app.js
    ├── app.json
    ├── assets -> Static files (imgs)
    ├── components -> Atomic design component structure
        ├── atoms -> The samaller part, simple components to apply composition
        └── molecules -> Components using groups of atoms
    ├── data-management
        ├── actions -> Actions definitions
        ├── reducers -> Reducers to react and apply state changes
        └── store -> Store configuration (general config and persistence)
    ├── navigation -> The app routes
    ├── screens -> The app screens
    └── services -> External services consumption (ark api, marketcap rate)
├── ui prototype -> UI Design prototype file
└── yarn.lock
```

### Major architectures explanation

- Usage of atomic design: The idea behind the choice of atomic design is to keep the composition as the main way of components construction and to make the reuse of them easier since we are builtin starting on the smaller part we will always have all pieces well separatedly to use as we wish.

- prop-types over flow / typescript: The complexity of the developed application is too low to use a super set as typescript and in the case flow x proptypes the choose is based on the cost x benefit calculation

- redux over xstate: The complexity here is also the main point to drive the choice but in this case, my personal experience with redux was the major point due to the learning curve of xstate x time to delivery.

- folder structure: This folder structure was thought to provide an easy understanding of where is everything. The idea is to look and understand

### Getting started

This app was bootstraped with the `react-native-cli` so for install and use please follow the instructions bellow:

### Installation

1 - Clone the project folder `git clone git@github.com:clucasalcantara/ark-wallet.git`

2 - Execute `yarn` on the root folder to install project dependencies

3 - From iOS build folder execute `pod install`

4 - Create a `local.properties` file into the android folder and points to your sdk location, example:

```
## This file must *NOT* be checked into Version Control Systems,
# as it contains information specific to your local configuration.
#
# Location of the SDK. This is only used by Gradle.
# For customization when using a Version Control System, please read the
# header note.
# Thu Jan 09 17:55:05 BRST 2020

sdk.dir=/Users/clucasalcantara/Library/Android/sdk
```

### Running

- Just choose the desired platform and execute the run command
  - `yarn run-ios` (The default simulator is iPhone 11, to change use the flag `--simulator=` with your desired model)
  - `yarn run-android`

> NOTICE: You may need to change the signing account of the iOS project
