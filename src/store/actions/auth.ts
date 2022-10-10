import { Dispatch } from "redux";
import { apiLogin } from "src/api";

import Types from "../types/auth";

export const login =
  (email: string, password: string, cb?: any) => (dispatch: Dispatch) => {
    dispatch({
      isAsyncCall: true,
      payload: {},
      type: Types.LOGIN,
      asyncCall: () => {
        return apiLogin(email, password);
      },
      onSuccess: (_dispatch: any, response: any) => {
        if (cb) cb(response);
      },
      onFailure: (_dispatch: any, error: any) => {
        if (cb) cb(false, error);
      },
    });
  };

export const logOutUser = () => (dispatch: Dispatch) => {
  dispatch({
    type: Types.LOG_OUT_USER,
  });
};
