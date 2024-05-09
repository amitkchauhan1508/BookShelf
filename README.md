This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Intall Node Modules

> **Note**: If you are running a project cloned or copied from different resources make sure you have installed all the node modules.
> To install node modules follow below commands (recommended node version for this app is 18)

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

## Step 2: Start the Metro Server

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

## About this project

This is a react native mobile application that servers as a frontend for books browsing online service. This aplication works on both android and iOS.

## Libraries Used

### 1. [@react-native-community/masked-view](https://github.com/react-native-community/masked-view)

- **Importance**: This library is crucial for creating visually appealing UI components such as masked images or views. It allows for the creation of complex shapes and designs that enhance the user experience.

### 2. [@react-navigation/native](https://github.com/react-navigation)

- **Importance**: Navigation is a fundamental aspect of mobile applications, and this library provides a robust and customizable navigation solution for React Native apps. It simplifies the process of implementing navigation patterns such as stack navigation, tab navigation, and drawer navigation.

### 3. [@react-navigation/stack](https://github.com/react-navigation)

- **Importance**: This library, coupled with `@react-navigation/native`, specifically focuses on stack-based navigation. It facilitates navigation between screens in a hierarchical manner, which is common in many mobile applications.

### 4. [native-base](https://nativebase.io/)

- **Importance**: NativeBase is a UI component library that provides a set of reusable and customizable components for building React Native applications. It streamlines the development process by offering pre-styled components like buttons, cards, and forms, thereby saving time and effort in UI development.

### 5. [prop-types](https://github.com/facebook/prop-types)

- **Importance**: While React Native doesn't enforce prop types like React does, using `prop-types` is still beneficial for type-checking and documenting the expected props of components. It helps catch bugs early and serves as documentation for component APIs.

### 6. [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler)

- **Importance**: This library provides a low-level gesture handling API for React Native. It enables developers to create rich and responsive touch-based interactions in their applications, enhancing the user experience with smooth and intuitive gestures.

### 7. [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)

- **Importance**: React Native Reanimated is a library for building high-performance animations in React Native apps. It allows for complex animations with fluid motion and high frame rates, providing a seamless user interface experience.

### 8. [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)

- **Importance**: Mobile devices come in various shapes and sizes, leading to differences in screen layouts. This library helps developers handle safe area insets, ensuring that content is properly displayed within the safe area of the screen, especially on devices with notches or rounded corners.

### 9. [react-native-screens](https://github.com/software-mansion/react-native-screens)

- **Importance**: React Native Screens is a library for managing and optimizing screen transitions in React Native apps. It improves performance by using native components for rendering screens, resulting in smoother transitions and reduced memory usage.

### 10. [react-native-svg](https://github.com/react-native-svg/react-native-svg)

- **Importance**: SVG (Scalable Vector Graphics) is a popular format for vector graphics on the web. This library brings SVG support to React Native, allowing developers to incorporate vector-based graphics into their applications for crisp and scalable visuals across different screen resolutions.

### 11. [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

- **Importance**: Icons play a significant role in mobile app design, aiding in navigation and enhancing visual appeal. This library provides a vast collection of customizable vector icons that can be easily integrated into React Native applications, ensuring consistent iconography across platforms.

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# To run Test on this App

Use below commands to run test in your application.
for more information on testing with jest refer this document
[Testing RN App](https://jestjs.io/docs/tutorial-react-native) page.
Commands to run test

```bash
# using npm
npm test

# OR using Yarn
yarn test
```

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
