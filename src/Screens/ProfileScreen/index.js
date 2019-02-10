import React, { PureComponent } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { connect } from "react-redux";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

import CloseBtn from '../CommonComponent/CloseBtn';
import ListColumn from './ListColumn';
import { theme } from '../../constants/theme';

const baseIconStyle = {
  size: 25,
  color: theme.color.grey
}

const LINKS = [
  {
    link: 'Share',
    title: 'Invite friends',
    icon: <EvilIcons name="share-apple" {...baseIconStyle} />,
  },
  {
    link: 'Help',
    title: 'Help',
    icon: <Ionicons name="ios-help-circle-outline" {...baseIconStyle} />,
  },
  {
    link: 'About',
    title: 'About this app',
    icon: <Ionicons name="ios-information-circle-outline" {...baseIconStyle} />,
  },
  {
    link: 'Settings',
    title: 'Your accounts settings',
    icon: <Feather name="settings" {...baseIconStyle} />,
  },
];

class ProfileScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: "My Profile",
    headerLeft: <CloseBtn
      onPress={() => navigation.goBack(null)}
      left
      size={25}
    />
  })

  state = {}

  render() {
    const { avatarUrl, firstName } = this.props.user

    return (
      <Box f={1} bg="white">
        <StatusBar barStyle="light-content" />
        <ScrollView>
          <ListColumn>
            <ListColumn.left>
              <Text size="xl" bold>{firstName}</Text>
            </ListColumn.left>
            <ListColumn.right>
              <Box circle={50} avatar>
                <Image
                  source={{ uri: avatarUrl }}
                  style={{
                    height: 50,
                    width: 50
                  }}
                />
              </Box>
            </ListColumn.right>
          </ListColumn>
          {
            LINKS.map(el => (
              <ListColumn link={el.link} key={el.title}>
                <ListColumn.left>
                  <Box dir="row" align="center">
                    <Box f={0.2}>{el.icon}</Box>
                    <Box f={1}>
                      <Text>{el.title}</Text>
                    </Box>
                  </Box>
                </ListColumn.left>
                <ListColumn.right>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    {...baseIconStyle}
                  />
                </ListColumn.right>
              </ListColumn>
            ))
          }
          <TouchableOpacity style={styles.logoutBtn}>
            <Text bold color="green">
              Log out
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </Box >
    );
  }
}

const styles = {
  logoutBtn: {
    borderWidth: 1,
    borderColor: theme.color.green,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: "90%",
    alignSelf: 'center',
    height: 40,
    marginTop: 20,
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user: user.User
  }
}

export default connect(mapStateToProps)(ProfileScreen);