import React from 'react';
 
//importing typewriter-effect
import Typewriter from "typewriter-effect";
import '../style/Write.css';
 
function Write() {
    return (
        <div className="App">
            <Typewriter
                
                onInit={(typewriter) => {
                   
                    typewriter
                    
                        .typeString("Believe and Build the link!")
                        .pauseFor(500)
                        .deleteAll()
                        .typeString("Believe and build the link!")
                        .start();
                }}
            />
        </div>
    );
}
 
export default Write;