import React, { useState } from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'
import logo from "../Assets/ClickerCat-logos/ClickerCat-logos_transparent.png";
import { createSearchParams, useNavigate } from "react-router-dom";
import dataSource from "../datasource.js";

const LoginForm = () => {
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
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-right">
              <input
                className="input is-link is-medium"
                type="email"
                placeholder="Email"
                onChange={updateEmail}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-right">
              <input
                className="input is-link is-medium"
                type="password"
                placeholder="Password"
                onChange={updatePassword}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>

          <div className="customCard">
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Login</button>
              </div>
              <div className="control">
                <a className="button is-link is-outlined" href="/register">
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

export default LoginForm;