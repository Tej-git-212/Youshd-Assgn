import React from "react";
import { useReducer } from "react";

const AuthContext = React.createContext(null);

const globalState = {
  isLogin: false,
  users: [],
};

const reducerFun = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
      };
    case "SIGNUP":
      return {
        ...state,
        users: [...state.users, payload],
      };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFun, globalState);

  const store = {
    state,
    dispatch,
  };

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
