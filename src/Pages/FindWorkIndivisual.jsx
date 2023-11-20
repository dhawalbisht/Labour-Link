import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "../style/FindWorkIndivisual.css";
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


export default function Indivisual() {

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    const maxSize = fieldName === 'facephoto' ? 3 * 1024 * 1024 : 5 * 1024 * 1024; // 3MB for facephoto, 5MB for policedocument

    if (file) {
      const fileSize = file.size;

      if (fileSize > maxSize) {
        setFileSizeError({
          ...fileSizeError,
          [fieldName]: `File size should be less than ${maxSize / (1024 * 1024)} MB`,
        });
      } else {
        setFileSizeError({
          ...fileSizeError,
          [fieldName]: "",
        });

        if (fieldName === 'facephoto') {
          setPhotoFileSize(fileSize);
        } else if (fieldName === 'policedocument') {
          setPoliceFileSize(fileSize);
        }
      }
    }
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
      phone: "",
      aadhaar: "",
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

    if (photoFileSize === 0 || photoFileSize > 3 * 1024 * 1024) {
      setFileSizeError({
        ...fileSizeError,
        facephoto: "Upload a photo with size less than 3MB",
      });
      return;
    }
  
    if (policeFileSize === 0 || policeFileSize > 5 * 1024 * 1024) {
      setFileSizeError({
        ...fileSizeError,
        policedocument: "Upload a police verification document with size less than 5MB",
      });
      return;
    }
  
    // Reset file size errors if they are within limits
    setFileSizeError({
      facephoto: "",
      policedocument: "",
    });

  window.location.href = "/postregistration";
};

const [photoFileSize, setPhotoFileSize] = useState(0);
const [policeFileSize, setPoliceFileSize] = useState(0);
const [fileSizeError, setFileSizeError] = useState({
  facephoto: "",
  policedocument: "",
});

return (
  <>
    <Navbar />
    <div className="back">
      <b className="pageheading">
        Please fill out the following details for registration.
      </b>
      <form onSubmit={validateFormInput}>
        <div className="columns">
          <div className="column11">
            <div className="inputframe">
              <div className="inputlabels">Full Name</div>
              <input required type="text" className="input-field" name="name" placeholder='Enter Name' />
            </div>
            <div className="inputframe">
              <div className="inputlabels">Email ID</div>
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
            <div className="inputframe">
              <div className="inputlabels">Phone no.</div>
              <input
                required
                type="tel"
                className="input-field"
                name="phone"
                placeholder="Enter phone no."
                value={formInput.phone}
                onChange={({ target }) => {
                  handleUserInput(target.name, target.value);
                }}
              />
              <p className="error-message">{formError.phone}</p>
            </div>
          </div>
          <div className="column22">


            <div className="inputframe">
              <div className="inputlabels">Aadhaar Card Number</div>
              <input
                required
                type="tel"
                className="input-field"
                name="aadhaar"
                placeholder="Aadhaar"
                value={formInput.aadhaar}
                onChange={({ target }) => {
                  handleUserInput(target.name, target.value);
                }}
              />
              <p className="error-message">{formError.aadhaar}</p>
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
              <div className="uploadinputlabels">
                <h3>Upload your photo (Face clearly visible)</h3>
              </div>
              <input
                name="facephoto"
                type="file"
                accept=".png, .jpeg"
                onChange={(e) => handleFileChange(e, 'facephoto')}
              />
              <p className="error-message">{fileSizeError.facephoto}</p>
            </div>

            <div className="inputframe">
              <div className="uploadinputlabels">
                <h3>Upload Police Verification Document</h3>
              </div>
              <input
                name="policedocument"
                type="file"
                accept=".pdf, .docx, .png, .jpeg, .jpg"
                onChange={(e) => handleFileChange(e, 'policedocument')}
              />
              <p className="error-message">{fileSizeError.policedocument}</p>
            </div>
            <div className="inputframe">
              <div className="button--container">
                <div className="button--child"></div>

                <Button type="submit" style={{ fontFamily: "Montserrat" }}>
                  Register
                </Button>

              </div>
            </div>
          </div>

        </div>
        <div className="column33">
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
    <div className="bottom">

    </div>
    <Footer />
  </>
);
}
