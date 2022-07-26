import React from "react";
import Textfield from "./Textfield";
import { useContext } from "react";
import { AuthContext } from "../../store/context";

function SignupForm() {
  const globalState = useContext(AuthContext);
  const { state, dispatch } = globalState;

  const signUpHandler = (e) => {
    e.preventDefault();
    const fullname = e.target.fullname.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const cpassword = e.target.cpassword.value.trim();
    console.log(cpassword);

    dispatch({
      type: "SIGNUP",
      payload: {
        id: new Date().toISOString(),
        fullname: fullname,
        email: email,
        password: password,
      },
    });
  };
  console.log(state);
  return (
    <form className="form" onSubmit={signUpHandler}>
      <Textfield
        type="text"
        className=""
        name="fullname"
        placeholder="Full Name"
      />
      <Textfield type="email" className="" name="email" placeholder="Email" />
      <Textfield
        type="password"
        className=""
        name="password"
        placeholder="Password"
      />
      <Textfield
        type="password"
        className=""
        name="cpassword"
        placeholder="Confirm Password"
      />
      <button type="submit">Sign Up</button>
      <div className="checkbox">
        <input type="checkbox" />
        <span>Remember Me</span>
      </div>
    </form>
  );
}

export default SignupForm;
