import * as types from "../../actions/types";
 ​
const initialState = {
  user: {}
};

export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_LOGIN_DATA:
      return {
        ...state,
        user: action.user
      };
    case types.SIGN_IN:
      console.log("Entrou no reducer");
      return {...state};
    default:
      return state;
  }
}