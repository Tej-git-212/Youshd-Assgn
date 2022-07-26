import React, { useState } from "react";
import Textfield from "./Textfield";
import { useContext } from "react";
import { AuthContext } from "../../store/context";

function LoginForm() {
  const globalState = useContext(AuthContext);
  const { state, dispatch } = globalState;
  const [error, setError] = useState(null);

  const loginHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    const indx = state.users.findIndex(
      (u) => u.email === email && u.password === password
    );
    if (indx >= 0) {
      dispatch({ type: "LOGIN" });
      setError(null);
    } else {
      setError("Your Email & Password do not match");
    }
  };

  const onChangeHandler = () => {
    dispatch({ type: "LOGIN" });
  };

  return (
    <>
      <form className="form" onSubmit={loginHandler}>
        <Textfield
          type="email"
          className={error ? "error" : ""}
          name="email"
          placeholder="Email"
        />
        <Textfield
          type="password"
          className={error ? "error" : ""}
          name="password"
          placeholder="Password"
        />
        {error && <p className="errorp">{error}</p>}
        <button type="submit">Login</button>
        <div className="checkbox">
          <input type="checkbox" onChange={onChangeHandler} />
          <span>Remember Me</span>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
