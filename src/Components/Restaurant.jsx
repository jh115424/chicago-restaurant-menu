import React, { useEffect, useState } from "react";

import "./Restaurant.css";
import menuItem from "./utils/menu-item";

const Restaurant = (props) => {
  return (
    <>
      {props.photos.map((photo, index) => (
        <div key={index} className="card-container">
          <div key={photo.idMeal}>
            <img src={photo.strMealThumb} alt={photo.strMealThumb} />

            <h3>{menuItem[index].name}</h3>
            <p>{menuItem[index].description}</p>
            <p>{menuItem[index].price}</p>
            <p>{menuItem[index].secondPrice}</p>
            <p>{menuItem[index].category}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Restaurant;
