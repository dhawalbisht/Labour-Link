import React from "react";
import ParticleImage, { Vector, forces } from "react-particle-image";

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "rgba(255, 200, 21, 0.8)",
  radius: () => Math.random() * 2.2 + 0.9,
  mass: () => 60,
  friction: () => 0.1,
 
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};

const Logo = () => {
  return (
    <ParticleImage
      src={"./assets/ll-white.png"}
      scale={0.22}
      entropy={25}
      maxParticles={4000}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      particleOptions={particleOptions}
      backgroundColor="transparent"
    />
  );
};

export default Logo;
