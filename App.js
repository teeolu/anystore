import React, { Component } from 'react';
import { UtilityThemeProvider } from "react-native-design-utility";
import { Provider } from 'react-redux';

import configureStore from "./src/Store/config";
import Navigation from './src/Screens';

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