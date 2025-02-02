import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className="register">
      <div className="container register__container">
        <h2>Sign In</h2>
        <form>
          <p className="form__error-message">Any error from the backend</p>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            autoComplete="true"
            autoFocus
            onChange={changeInputHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="true"
            onChange={changeInputHandler}
          />

          <p>
            Don't have an account? <Link to="/register">Sign up</Link>{" "}
          </p>
          <button type="submit" className="btn primary">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
