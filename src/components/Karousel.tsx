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
  return (
    <div style={{paddingTop:100, height:300}} className='box'>
        <Carousel useKeyboardArrows={true}>
            {images.map((URL, index) => (
                 <div className="slide">
         <img alt="sample_file" src={URL} key={index} />
         </div>
    ))}
  </Carousel> 
    </div>
  )
}

export default Karousel;