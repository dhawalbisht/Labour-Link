import React from 'react'
import Navbar from '../components/Navbar'
import '../style/FindWork.css'
import styled from "styled-components";
import Footer from './Footer'

const theme = {
    yellow: {
        default: "#ffc815",
        hover: "#eab60c"
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
    theme: "yellow"
};


const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active }) =>
        active &&
        `
    opacity: 1; 
  `}
`;

export default function FindWork() {

    return (
        <>
            <Navbar />


            <div className="options">
                <div className="indivisual">
                    <div className="image"><img height="195rem" width="260rem" src='./assets/indivisual.png'></img></div>
                    <div className="box"></div>
                    <div className="apply-as-an">apply as an</div>
                    <div className="button-container">
                        <div className="button-child"></div>
                        <div className="pos1">
                            <a href="/indivisual"><Button style={{fontFamily: 'Montserrat' }}>Individual</Button></a>
                        </div>
                    </div>
                </div>
                <b className="or">or</b>
                <div className="agency">
                    <div className="image"><img height="195rem" width="260rem" src='./assets/agency.png'></img></div>
                    <div className="box"></div>
                    <div className="apply-as-an">apply as an</div>
                    <div className="container">
                        <div className="containerchild"></div>
                        <div className="pos2">
                            <a href="/agency"><Button style={{ fontFamily: 'Montserrat' }}>Agency</Button></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}