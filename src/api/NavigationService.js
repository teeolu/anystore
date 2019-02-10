import { NavigationActions } from "react-navigation";

let navigator;

function setTopLevelNavigator(ref) {
  navigator = ref
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}

function back() {
  navigator.dispatch(NavigationActions.back())
}

function popToTop(imediate = true) {
  navigator.dispatch({
    type: NavigationActions.POP_TO_TOP,
    imediate
  })
}

function reset({ actions, index }) {
  navigator.dispatch({
    type: NavigationActions.RESET,
    index,
    actions
  })
}

function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null
  }

  const route = navigationState.routes[navigationState.index];

  if (route.routes) {
    return getCurrentRouteName(route)
  }

  return route.routeName
}

export const NavigationServices = {
  navigator,
  setTopLevelNavigator,
  navigate,
  back,
  popToTop,
  getCurrentRouteName,
  reset
}

window.NavigationServices = NavigationServices