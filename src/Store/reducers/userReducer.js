import { GET_USER_INFO, LOGIN } from "../actions/types";

const initialState = {
  User: {},
  token: ""
}

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state, User: action.payload
      }
      break;
    case LOGIN:
      return {
        ...state, token: action.payload
      }
      break;
    default:
      return state;
  }
}

// {
//   _id: types.identifier,
//   firstName: types.string,
//   lastName: types.string,
//   avatarUrl: types.maybe(types.string),
//   addresses: types.optional(types.array(UserAddressModel), []),
// }