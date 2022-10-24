import { Reducer } from 'redux';

import { defaultObj } from '../constants';
import { handleData } from '../middlewares/handleData';
import Types from '../types/auth';

const initialState = {
  login: {
    ...defaultObj,
  },
};

const AuthReducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.LOGIN:
      return handleData(state, action, {
        request: (prevState) => ({
          ...prevState,
          login: {
            ...prevState.login,
            loading: true,
          },
        }),
        success: (prevState) => ({
          ...prevState,
          login: {
            loading: false,
            data: payload,
            error: '',
          },
        }),
        failure: (prevState) => ({
          ...prevState,
          login: {
            loading: false,
            // TODO: test for login successfully
            data: {
              token: 'Test123',
            },
            error: payload,
          },
        }),
      });
    case Types.LOG_OUT_USER: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
