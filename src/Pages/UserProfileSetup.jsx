import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "../style/UserProfileSetup.css";
import styled from "styled-components";
import Footer from './Footer'
import { indianStates, indianCities } from '../database/statesandcities';
import Logo from "../components/llparticlelogo";

const theme = {
  yellow: {
    default: "#ffc815",
    hover: "#eab60c",
  },
};

const Button = styled.button`
  background: linear-gradient(to bottom right, #FFC815 50% , #ffb700 ); /* Use your preferred yellow-orange color codes */
  color: black;
  padding: 5px 15px;
  width: 16.3rem;
  height: 3.1rem;
  border: none;
  border-radius: 0.5rem;
  outline: 0;

  font-weight: bold;
  font-size: 1rem;

  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background 250ms;

  &:hover {
    background: linear-gradient(to bottom right, #f0bc15, #edaa00 140%); /* Use your preferred hover colors */
  }

  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "yellow",
};

const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active }) =>
    active &&
    `
    opacity: 1; 
  `}
`;

const PasswordToggle = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: black;
  padding: 5px 10px;
  height: 2rem;
  border: none;
  border-radius: 0.5rem;
  outline: 0;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
`;

PasswordToggle.defaultProps = {
  theme: "yellow",
};


export default function Agency() {

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const validateFile = () => {
    if (!selectedFile) {
      setFormError({
        ...formError,
        file: "Please select a file",
      });
      return false;
    }

    const maxFileSize = 5 * 1024 * 1024;

    if (selectedFile.size > maxFileSize) {
      setFormError({
        ...formError,
        file: "File size exceeds the limit (5 MB)",
      });
      return false;
    }

    setFormError({
      ...formError,
      file: "",
    });

    return true;
  };

  const [showPassword, setShowPassword] = useState(false);

  const [formInput, setFormInput] = useState({
    agencyemail: "",
    password: "",
    confirmpassword: "",
  });

  const [formError, setFormError] = useState({
    agencyemail: "",
    password: "",
    confirmpassword: "",
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {
      email: "",
      password: "",
      confirmpassword: "",
      agencyphone: "",
      gstin: "",
    };

    if (!formInput.email && !formInput.password) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
        password: "Password should not be empty",
      });
      return
    }

    if (!formInput.email) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
      });
      return
    }

    if (formInput.confirmpassword !== formInput.password) {
      setFormError({
        ...inputError,
        confirmpassword: "Password and confirm password should be same",
      });
      return;
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/;
    if (!passwordRegex.test(formInput.password)) {
      setFormError({
        ...inputError,
        password:
          "Password should have a minimum of 6 characters, at least one capital letter, at least one digit, and at least one special character",
      });
      return;
    }

    setFormError(inputError);

    if (!formInput.agencyphone || formInput.agencyphone.length !== 10) {
      setFormError({
        ...inputError,
        agencyphone: "Phone number should be 10 digits",
      });
      return;
    }

    if (!formInput.gstin || formInput.gstin.length !== 15) {
      setFormError({
        ...inputError,
        gstin: "GSTIN number should be 15 digits",
      });
      return;
    }

    const isFileValid = validateFile();

    if (!isFileValid) {
      // Display error message for file validation
      console.log("File validation failed");
      return;
    }
    window.location.href = "/postregistration";
  };

  const [selectedFile, setSelectedFile] = useState(null);




  return (
    <>
      <Navbar />
      <div className="backk">
        <b className="pageheadingg">
          Please setup your profile before you continue.
        </b>
        <form onSubmit={validateFormInput}>
          <div className="columnss">

            <div className="column--1">
              <div className="inputframe">
                <div className="inputlabels">Full Name</div>
                <input required type="text" className="input-field" name="username" placeholder='Enter your full name' />
              </div>
              <div className="inputframe">
                <div className="inputlabels">Email</div>
                <input
                  value={formInput.email}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  name="email"
                  type="text"
                  className="input-field"
                  placeholder="Enter Email"
                />
                <p className="error-message">{formError.email}</p>
              </div>
              <div className="inputframe">
                <div className="inputlabels">Choose a password</div>
                <input
                  value={formInput.password}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input-field"
                  placeholder="Password"
                />
                <p className="error-message">{formError.password}</p>
              </div>
              <div className="inputframe">
                <div className="input-text-label">Confirm password</div>
                <input
                  value={formInput.confirmpassword}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  name="confirmpassword"
                  type="password"
                  className="input-field"
                  placeholder="Confirm Password"
                />
                <p className="error-message">{formError.confirmpassword}</p>
                <PasswordToggle
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img height={"25rem"} width={"25rem"}
                    src={showPassword ? "../assets/show.png" : "../assets/hide.png"}
                    alt={showPassword ? "Show Password" : "Hide Password"}
                  />
                </PasswordToggle>
              </div>
            </div>
            <div className="column--2">
            <div className="inputframe">
                <div className="inputlabels">Address</div>
                <input
                  required
                  type="text"
                  className="input-field"
                  name="address"
                  placeholder="House no. , Street"
                  
                />
                <p className="error-message">{formError.gstin}</p>
              </div>
              <div className="inputframe">
                <div className="inputlabels">State</div>
                <select
                  required
                  className="input-field"
                  name="state"
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                >
                  <option value="">Select State</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <p className="error-message">{formError.state}</p>
              </div>
              <div className="inputframe">
                <div className="inputlabels">City</div>
                <select
                  required
                  className="input-field"
                  name="city"
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                >
                  <option value="">Select City</option>
                  {formInput.state &&
                    indianCities[formInput.state].map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
                <p className="error-message">{formError.city}</p>
              </div>
              <div className="inputframe">
                <div className="button---container">
                  <div className="button---child"></div>
                  <a href="/">
                    <Button style={{ fontFamily: "Montserrat" }}>
                      Register
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="column--3">
          <div className="particlecontainer">
              <div className="particles">
                <Logo />
              </div>
              <div className="particlebg">
                <img width="650px" src="../assets/particlelogobg.png"></img>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
