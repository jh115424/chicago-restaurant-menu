import React, { useEffect, useState } from "react";
// import "./Header.css";
import "./Restaurant.css";

const Restaurant = (props) => {
 
  return (
   
    <>
     
      {props.photos.map((photo, index) => (
        <div key={index} className="card-container">
          <div key={photo.idMeal} className="">
            <img src={photo.strMealThumb} alt={photo.strMeal} />
            <h3>{photo.strMeal}</h3>
            <p>{photo.strInstructions.slice(0, 200)}...</p>
          
          </div>
         
        </div>
        
        
      ))}
    </>
  );
};

export default Restaurant;
