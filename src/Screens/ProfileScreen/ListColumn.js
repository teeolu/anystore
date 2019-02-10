import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Box, Text } from "react-native-design-utility";

import { NavigationServices } from "../../api/NavigationService";
import { theme } from "../../constants/theme";

const left = ({ children }) => (
  <Box f={1} align="start">
    {children}
  </Box>
)

const right = ({ children }) => (
  <Box align="end">
    {children}
  </Box>
)

class ListColumn extends PureComponent {
  static left = left;
  static right = right;

  state = {}

  renderContent = () => (
    <Box
      dir="row"
      p="sm"
      align="center"
      justify="between"
      style={{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: theme.color.greyLight
      }}
    >
      {this.props.children}
    </Box>
  )

  handePress = () => {
    NavigationServices.navigate(this.props.link)
  }

  render() {
    if (this.props.link) {
      return (
        <TouchableOpacity onPress={this.handePress}>
          {this.renderContent()}
        </TouchableOpacity>
      )
    }

    return (
      this.renderContent()
    );
  }
}

export default ListColumn;