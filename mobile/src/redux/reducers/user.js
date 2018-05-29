import * as types from '../../actions/types';  ​

const initialState = {
  name: "",
  email: "",
  birthDate: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_REGISTER_DATA:
      return action.user;
    default:
      return state;
  }
}
