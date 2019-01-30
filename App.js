import React, { Component } from 'react';
import { UtilityThemeProvider } from "react-native-design-utility";
import Navigation from './src/Screens';




export default class App extends Component {
  render() {
    return (
      <UtilityThemeProvider>
        <Navigation />
      </UtilityThemeProvider>
    );
  }
}