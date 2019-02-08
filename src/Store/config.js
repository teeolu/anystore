import { createStore, compose, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducers from "./reducers";

// let reduxCompose = compose;

// if (__DEV__) {
//   reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   // reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// }

const configureStore = () => {
  // return createStore(Reducers, reduxCompose(applyMiddleware(promiseMiddleware)))

  return createStore(Reducers, composeWithDevTools(applyMiddleware(promiseMiddleware)));
}

export default configureStore;

// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));