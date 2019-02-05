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

export const NavigationServices = {
  navigator,
  setTopLevelNavigator,
  navigate,
  back,
  popToTop,
  reset
}

window.NavigationServices = NavigationServices