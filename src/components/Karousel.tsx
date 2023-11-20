import React from 'react';
import { Carousel } from "react-responsive-carousel";
import '../style/Karousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ClassNames } from '@emotion/react';
import { Height } from '@mui/icons-material';
const images = [
    "./assets/1.png",
    "./assets/2.png",
    "./assets/3.png", 
    "./assets/4.png",
    "./assets/5.png"
  ];
  function Karousel() {
    const customStyles = {
      controlDots: {
        width: '10px',
        height: '10px',
        margin: '0 4px', // Adjust spacing between dots if needed
        backgroundColor: 'black', // Set the dot color to dark gray
      },
    };
    return (
      <div style={{ paddingTop: 100, height: 300 }} className='box'>
        <Carousel useKeyboardArrows={true} autoPlay={true} interval={4000} showThumbs={false} showStatus={false} infiniteLoop={true} transitionTime={1000}>
          {images.map((URL, index) => (
            <div className="slide" key={index}>
              <img alt={`sample_file_${index}`} src={URL}  style={{ marginBottom: '40px' }} />
            </div>
          ))}
        </Carousel>
      </div>
    )
  }
  
  export default Karousel;
