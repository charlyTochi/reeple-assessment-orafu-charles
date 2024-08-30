This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Currency Converter React Native App

# Overview

The Currency Converter app is a React Native application designed to convert amounts between different currencies. The app fetches real-time exchange rates and performs the currency conversion dynamically as the user inputs the amount.

# Features

Real-time Currency Conversion: Converts amounts in real-time based on the latest exchange rates.

Currency Selection: Allows users to select source and target currencies from a dropdown menu.

Responsive Design: Optimized for mobile devices with a clean and user-friendly interface.

Loading Indicator: Displays a spinner while fetching exchange rates.

Network Check: Confirms the availablility of internet connection on the app and give user feedback.

Refresh Button: Manually refreshes exchange rates.




# Project Structure

src/: Contains the source code for the application.

components/: Contains reusable React components.

hooks/: Custom React hooks used for fetching exchange rates.

utils/: Utility functions and constants, such as currency symbols, network info and formatters.

App.js: The main entry point of the application.


# Usage

Select Currencies: Use the dropdown menus to choose the source and target currencies.

Enter Amount: Input the amount to be converted in the text field.

Refresh Rates: Click the "Refresh Rates" button to update the exchange rates manually.


# Considerations and Limitations

API Rate Limits: The app depends on a currency exchange rate API, which may have rate limits. Ensure that your API key (if applicable) adheres to the limits to avoid disruptions.

Error Handling: Basic error handling is included. For production use, consider implementing more robust error handling and user feedback mechanisms.

Currency Data: The list of available currencies is static. Ensure that the currencies array in AppConstants is kept up to date with relevant currencies.

Testing: While the app is functional, thorough testing on various devices and screen sizes is recommended to ensure a consistent user experience.



# Setup Instructions

# Prerequisites

Node.js: Make sure you have Node.js installed. You can download it from (https://nodejs.org)

# Installation

# Clone the Repository:

git clone https://github.com/charlyTochi/reeple-assessment-orafu-charles.git

# Navigate to the Project Directory:

cd Assesement

# Install Dependencies:

npm install

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

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

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
