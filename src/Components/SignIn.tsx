import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { actions } from "../store/auth-slice";

const SignIn = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState<string | number>("");
  const [email, setEmail] = useState<string>("");

  const fnEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };
  const fnPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const handleSignIn = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(
      actions.login({ email: email, password: password, loggedIn: true })
    );
  };

  return (
    <section className="register py-4">
      <h1>Signin</h1>
      <span>
        {" "}
        No collector Chassis account yet?<Link to="/signup">Signup</Link>
      </span>

      <input
        className="inputbox"
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={fnEmail}
      />
      <input
        className="inputbox"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={fnPassword}
      />
      <h6>Forgot your password?</h6>
      <button
        type="button"
        className="reg-button btn-sm"
        onClick={handleSignIn}
      >
        SignIn
      </button>
    </section>
  );
};

export default SignIn;
