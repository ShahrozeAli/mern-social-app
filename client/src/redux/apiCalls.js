import { publicRequest } from "../requestMethods";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const response = await publicRequest.post("/auth/login", user);
    
    dispatch(loginSuccess(response.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());

  try {
    const response = await publicRequest.post("/auth/register", user);

    dispatch(registerSuccess(response.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};
