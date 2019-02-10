import React, { Component } from 'react';
import { UtilityThemeProvider } from "react-native-design-utility";
import { UIManager } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from "./src/Store/config";
import Navigation from './src/Screens';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true)

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <UtilityThemeProvider>
          <Navigation />
        </UtilityThemeProvider>
      </Provider>
    );
  }
}