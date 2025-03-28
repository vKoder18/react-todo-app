import { LOGIN_SUCCESS, LOGOUT } from "../types";

export const login = (username, password) => (dispatch) => {
  if (username === "admin" && password === "password") {
    dispatch({ type: LOGIN_SUCCESS, payload: { username } });
  } else {
    alert("Invalid credentials");
  }
};

export const logout = () => ({
  type: LOGOUT,
});
