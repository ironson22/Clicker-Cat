import React, { useState } from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'
import logo from "../Assets/ClickerCat-logos/ClickerCat-logos_transparent.png";
import { useNavigate } from "react-router-dom";
import dataSource from "../datasource.js";

const RegisterForm = () => {

  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newName, setNewName] = useState('');
  const navigate = useNavigate();

  const updateEmail = (event) => {
    setNewEmail(event.target.value);
  };
  const updatePassword = (event) => {
    setNewPassword(event.target.value);
  };
  const updateName = (event) => {
    setNewName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("submit");
    const newUser = {
      email: newEmail,
      password: newPassword,
      name: newName,
    };

    console.log(newUser);

    saveUser(newUser);
  };

  const saveUser = async (user) => {
    let response;

    response = await dataSource.post("/users", user);

    console.log(response);
    console.log(response.data);
    navigate("/home");
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
        <section className="section">
          <form onSubmit={handleFormSubmit}>
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-right">
                <input
                  class="input is-link is-medium"
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
                  class="input is-link is-medium"
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
            <div class="field">
              <label class="label">Name</label>
              <div class="control has-icons-right">
                <input
                  class="input is-link is-medium"
                  type="text"
                  placeholder="Name"
                  onChange={updateName}
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
                  <button class="button is-link" type="submit">Register</button>
                </div>
                <div class="control">
                  <a class="button is-link is-outlined" href="/">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
};

export default RegisterForm;