import React, { PureComponent } from 'react';

import { NavigationServices } from "../api/NavigationService";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { theme } from "../constants/theme";
import TabBar from './NavigationTabbar/TabBar';
import ShoppingCartIcon from './ShoppingCartScreen/ShoppingCartIcon';

const primaryHeader = {
  headerStyle: {
    backgroundColor: theme.color.green,
  },
  headerTintColor: theme.color.white,
  headerTitleStyle: {
    fontWeight: '400',
  }
}

const AuthNavigator = createStackNavigator(
  {
    Login: {
      getScreen: () => require("./LoginScreen").default
    }
  }, {
    navigationOptions: {
      header: null
    }
  }
)

const ProfileStackNavigator = createStackNavigator(
  {
    Profile: {
      getScreen: () => require("./ProfileScreen").default
    }
  },
  {
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: '400',
      }
    }
  }
)

const ShoppingCartNavigator = createStackNavigator(
  {
    ShoppingCart: {
      getScreen: () => require("./ShoppingCartScreen").default,
      navigationOptions: {
        headerStyle: {
          backgroundColor: theme.color.white,
        }
      }
    }

  }
)

const HomeStack = createStackNavigator(
  {
    Home: {
      getScreen: () => require("../Screens/HomeScreen/HomeScreen").default
    },
    Category: {
      getScreen: () => require("./CategoryScreen/CategoryScreen").default
    },
    ShoppingCart: {
      screen: ShoppingCartNavigator,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    navigationOptions: {
      ...primaryHeader,
      headerRight: <ShoppingCartIcon />
    }
  }
)

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  if (
    NavigationServices.getCurrentRouteName(navigation.state) === "ShoppingCart"
  ) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    List: {
      getScreen: () => require("./ListScreen").default
    },
    Stores: {
      getScreen: () => require("./StoresScreen").default
    },
    Order: {
      getScreen: () => require("./OrderScreen").default
    }
  },
  {
    tabBarComponent: props => <TabBar {...props} />
  }
)

const MainNavigator = createStackNavigator(
  {
    Tab: TabNavigator,
    Profile: ProfileStackNavigator
  },
  {
    mode: "modal",
    navigationOptions: {
      header: null
    }
  }
)

const AppNavigator = createSwitchNavigator(
  {
    Splash: {
      getScreen: () => require("./SplashScreen/SplashScreen").default
    },
    Auth: AuthNavigator,
    Main: MainNavigator
  }, {
    initialRouteName: "Splash"
  }
)

class Navigation extends PureComponent {
  state = {}
  render() {
    return (
      <AppNavigator ref={r => NavigationServices.setTopLevelNavigator(r)} />
    );
  }
}

export default Navigation;