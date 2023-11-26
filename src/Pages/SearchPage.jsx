import React from "react";
import Navbar from "../components/Navbar";
import "../style/SearchPage.css";
import { Link } from "@mui/material";
import Footer from "./Footer";
import Labour from "../components/Labour";
import { useFirebase } from "../context/Firebase";
import { useState } from "react";
import { useEffect } from "react";

export default function SearchPage() {
  const { labours, setLabours } = useFirebase();
  const [userLocation, setUserLocation] = useState({
    lat: null,
    lon: null,
  });
  useEffect(() => {
    const successHandler = (position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation({ lat: latitude, lon: longitude });
    };
    const errorHandler = (err) => {
      console.log(err.message);
    };
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);
  useEffect(() => {
    console.log(userLocation);
  }, [userLocation]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };
  const locationSort = () => {
    const sortedLaborList = labours
      .map((labor) => ({
        ...labor,
        distance: calculateDistance(
          labor.lat,
          labor.lon,
          userLocation.lat,
          userLocation.lon
        ),
      }))
      .sort((a, b) => a.distance - b.distance);
    setLabours(sortedLaborList);
    console.log(labours);
  };

  const wagesSort = (sortType) => {
    const sortedLaborList = labours.sort((a, b) => {
      if (sortType === "asce") {
        return a.charge - b.charge;
      } else {
        return b.charge - a.charge;
      }
    });
    setLabours([...sortedLaborList]);
    console.log(labours);
  };

  return (
    <>
      <Navbar />

      <div className="bg">
        <br></br>
        <br></br>
        <br></br>
        <div className="Search">
          <p className="text11">Search Results</p>
          <div className="dropdown">
            <div className="dropbtn">
              Sort by
              <img
                className="image"
                height="20px"
                src=".\assets\down.png"
              ></img>{" "}
            </div>
            <div className="dropdown-content">
              <div
                onClick={() => {
                  wagesSort("asce");
                }}
              >
                Price: Low to High
              </div>
              <div
                onClick={() => {
                  wagesSort("desc");
                }}
              >
                Price: High to Low
              </div>
              <div onClick={locationSort}>Nearest</div>
            </div>
          </div>
        </div>
        {!labours.length && (
          <div className="loader-container">
            <span className="loader2"></span>
          </div>
        )}
        {labours.length && (
          <div className="rectangle">
            {labours.map((labour) => {
              return <Labour data={labour} key={labour.id} />;
            })}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
