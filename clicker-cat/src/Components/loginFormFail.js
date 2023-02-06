import React, { useState } from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'
import logo from "../Assets/ClickerCat-logos/ClickerCat-logos_transparent.png";
import { createSearchParams, useNavigate } from "react-router-dom";
import dataSource from "../datasource.js";

const LoginFormFail = () => {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const updateEmail = (event) => {
    setNewEmail(event.target.value);
  };
  const updatePassword = (event) => {
    setNewPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("submit");
    const User = {
      email: newEmail,
      password: newPassword,
    };

    console.log(User);

    saveUser(User);
  };

  const saveUser = async (user) => {
    let response;

    response = await dataSource.post("/users/login", user);

    console.log(response);
    console.log(response.data);
    if (response.status === 200)
    {
      navigate("/home");
    } else {
      navigate({
        pathname: "/",
        search: createSearchParams({
          id: "fail"
        }).toString()
      });
    }
  };  

    return (
      <div className="container is-max-desktop">
        <section className="section logo-section">
          <div className="logoContainer">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </section>
        <form onSubmit={handleFormSubmit}>
        <section className="section">
        <p class="help is-danger">Email or Password Invalid</p>
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-right">
              <input
                class="input is-danger is-medium"
                type="email"
                placeholder="Email"
                onChange={updateEmail}
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-right">
              <input
                class="input is-danger is-medium"
                type="password"
                placeholder="Password"
                onChange={updatePassword}
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>

          <div className="customCard">
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Login</button>
              </div>
              <div class="control">
                <a class="button is-link is-outlined" href="/register">
                  Register
                </a>
              </div>
            </div>
          </div>
        </section>
        </form>
      </div>
    );
};

export default LoginFormFail;