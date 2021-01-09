import {loginConstants} from "../constants";

export const loginActions = {
    login,
    logout,
    signup
  };
  
  function login(loginDetails) {
    return { type: loginConstants.LOGIN, ...loginDetails };
  }
  function logout() {
    return { type: loginConstants.LOGOUT };
  }
  function signup(loginDetails) {
    return { type: loginConstants.SIGNUP,...loginDetails };
  }
  