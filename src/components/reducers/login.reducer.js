import { loginConstants } from "../constants";

var loginDetails = {
  username:'',
  password: '',
  token:''
};

export function login(state = loginDetails, action) {
  switch (action.type) {
    case loginConstants.LOGIN:
      return {
        ...state,token:action.token
      };
    case loginConstants.SIGNUP:
      return {
        ...state,username: action.username,password:action.password,token:action.token
      };  
    case loginConstants.LOGOUT:
      return {
        ...state,token:''
      };  
    default:
      return state;
  }
}
