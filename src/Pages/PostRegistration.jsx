import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "../style/PostRegistration.css";
import styled from "styled-components";
import Footer from './Footer'

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

const PostRegistration = () => {
    return (
        <>
            <Navbar />
            
            <div className="backk">    
            <img
                        height="550px"
                        src="../assets/thumbsup.png"
                        style={{ margin: '3rem 78rem' }} 
                    />  
                <b className="registeredtext">
                    Your registration request has been successfully sent
                    <br></br>
                    Your account will become active when we verify your documents
                </b>
                <b className="registeredtextsupporting">
                    You will be notified about it on your given e-mail, Thank You for signing up!
                </b>
                
            </div>
            <Footer />
        </>
    )
}

export default PostRegistration;