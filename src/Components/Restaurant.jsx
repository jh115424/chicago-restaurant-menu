import React, { useEffect, useState } from "react";
// import "./Header.css";
import "./Restaurant.css";
import menuInfo from "./utils/menu-info";

const Restaurant = (props) => {
  return (
    <>
      {props.photos.map((photo, index) => (
        <div key={index} className="card-container">
          <div key={photo.idMeal} className="">
            <img src={photo.strMealThumb} />
            <h3>{photo.strMeal}</h3>
            <details>
              <p>{photo.strCategory}</p>
              <p>{photo.strArea}</p>
              <p>{photo.strTags}</p>

              <summary>Click here for ingredients and instructions!</summary>
              <p>{photo.strIngredient1}</p>
              <p>{photo.strIngredient2}</p>
              <p>{photo.strIngredient3}</p>
              <p>{photo.strIngredient4}</p>
              <p>{photo.strIngredient5}</p>
              <p>{photo.strIngredient6}</p>
              <p>{photo.strIngredient7}</p>
              <p>{photo.strIngredient8}</p>
              <p>{photo.strIngredient9}</p>
              <p>{photo.strIngredient10}</p>
              <p>{photo.strIngredient11}</p>
              <p>{photo.strIngredient12}</p>
              <p>{photo.strIngredient13}</p>
              <p>{photo.strIngredient14}</p>
              <p>{photo.strIngredient15}</p>
              <p>{photo.strIngredient16}</p>
              <p>{photo.strIngredient17}</p>
              <p>{photo.strInstructions}</p>
              <p>{photo.strInstructions.slice(0, 200)}...</p>
            </details>
          </div>
        </div>
      ))}
    </>
  );
};

export default Restaurant;








     {/* {menuInfo
        .filter((menuInfo) => menuInfo.category === "category")
        .map((menuInfo, index) => (
          <div key={index} className="card-container">
            <div key={photo.idMeal} className="card">
              <img src={photo.strMealThumb} alt={menuInfo.strMeal} />
              <h3>{menuInfo.strMeal}</h3>
            </div>
          </div>
        ))} */}