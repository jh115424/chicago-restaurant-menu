import React, { useEffect, useState } from "react";
import "./Restaurant.css";

const Restaurant = (props) => {
  const showRestaurants = () => {
    return (
      <>
        {props.photos.map((photo, index) => (
          <div key={index} className="card-container">
            <div key={photo.idMeal} className="">
              <img src={photo.strMealThumb} alt={photo.strMeal} />
              <h3>{photo.strMeal.slice(0, 15)}...</h3>
            </div>
          </div>
        ))}
      </>
    );
  };

  return <div>{showRestaurants()}</div>;
};

export default Restaurant;
