import React from "react";
import Navbar from "../components/Navbar";
import "../style/HomePage.css";
import { Link } from "@mui/material";
import Karousel from "../components/Karousel";
import Footer from "../Pages/Footer";
import Write from "../components/Typewrite";
import FindWork from "./FindWork";
import shadows from "@mui/material/styles/shadows";


export default function HomePage({ isLogin, setIsLogin }) {
  return (
    <>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />

      <div className="block1">
        <div className="row-1 row"></div>
        <div className="row-2 row"></div>
        <div className="row-3 row"></div>
        <div className="row-4 row"></div>
        <div className="row-5 row"></div>
        <div className="row-6 row"></div>
        <div className="row-7 row"></div>
        <div className="row-8 row"></div>
        <div className="row-9 row"></div>
        <div className="row-10 row"></div>
        <div className="Rectangle1">
          <h1 className="text1">
            <Write />
          </h1>
          <p className="text2">
            "Building a bridge between job seekers and employers in the labour
            market."
          </p>
        </div>
        <div>
          <a href="/findwork">
            <button className="button-1">
              Register for Work!
              {/* <Link src="LoginPage" className="register">
              
            </Link> */}
            </button>
          </a>
        </div>
        <div className="right-image1">
          <img className="hello" height="550px" width="600px" src="./assets/img.png" >

          </img>
        </div>
      </div>
      <div className="Rectangle8">
        <video
          src="./assets/video.mp4"
          autoPlay
          loop
          muted
          width="100%"
          height="100%"
          repeat
        ></video>
        <div className="textblock">
          <h2 className="text-3"><p><span style={{ backgroundColor: '#32173B' }}>⠀OUR AIM⠀</span></p></h2>
          <p className="text-4">
            The website aims to bridge the gap between job seekers and employers
            by providing a centralized platform where they can connect and
            fulfill their respective needs.
          </p>
        </div>
      </div>

      <div className="block3">
        {/* <div className="bg grey flex"> */}
        <div className="border1">
          <h3 className="text5">Rating and Reviews</h3>
          <div className="ratingblock">
            <div className="eclipse1">
              <img className="eclipse1" src="./assets/pic1.jpg"></img>
            </div>
            <div className="eclipse2">
              <img className="eclipse2" src="./assets/pic2.jpg"></img>
            </div>
            <div className="eclipse3">
              <img className="eclipse3" src="./assets/pic3.jpg"></img>
            </div>
            <div className="eclipse4">
              <img className="eclipse4" src="./assets/pic4.jpg"></img>
            </div>

            <div className="eclipse5">
              <img className="eclipse5" src="./assets/pic5.jpg"></img>
            </div>
          </div>

          <div className="rating">
            <img src="./assets/rating.png"></img>
            <img src="./assets/rating.png"></img>
            <img src="./assets/rating.png"></img>
            <img src="./assets/rating.png"></img>
            <img src="./assets/rating.png"></img>
          </div>
          <div className="review">
            <div>Easy to use</div>
            <div>Good for shifting homes</div>
            <div>Good links and communication</div>
            <div>Easy to use</div>
            <div>Good for labours to find work</div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Karousel />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}
