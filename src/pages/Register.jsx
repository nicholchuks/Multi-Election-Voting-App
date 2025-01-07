import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
    password2: "",
  });
  console.log(userData)

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  return (
    <section className="register">
      <div className="container register__container">
        <h2>Sign Up</h2>
        <form>
          <p className="form__error-message">Any error from the backend</p>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            autoComplete="true"
            autoFocus
            onChange={changeInputHandler}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            autoComplete="true"
            onChange={changeInputHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="true"
            onChange={changeInputHandler}
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            autoComplete="true"
            onChange={changeInputHandler}
          />
          <p>
            Already have an account? <Link to="/">Sign in</Link>{" "}
          </p>
          <button type="submit" className="btn primary">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
