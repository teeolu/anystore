import React, { Component } from 'react';
import { UtilityThemeProvider } from "react-native-design-utility";
import { Provider } from "mobx-react/native"

import Navigation from './src/Screens';
import { store } from './src/Stores';

export default class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <UtilityThemeProvider>
          <Navigation />
        </UtilityThemeProvider>
      </Provider>
    );
  }
}