import React from "react";
import loginImg from "../../assets/login.png";
import LoginForm from "./LoginForm";
import { Route, Link, Routes } from "react-router-dom";
import SignupForm from "./SignupForm";

function Login() {
  return (
    <div className="login-page">
      <div className="login-img">
        <img src={loginImg} alt="loginimage" />
      </div>
      <div className="login-form">
        <div className="login-header">
          <Link to="/" style={{ textDecoration: "none" }}>
            <button>Log In</button>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <button>Sign up</button>
          </Link>
        </div>

        <div className="form-container">
          <Routes>
            <Route exact path="/" element={<LoginForm />} />
            <Route path="/register" element={<SignupForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Login;
