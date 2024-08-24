import React, { Component } from "react";

import "./Components/Restaurant.css";
import "./Components/Header.css";

import Restaurant from "./Components/Restaurant";
import { useState } from "react";
const userUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=g";


class App extends Component {
  constructor(props) {
    super();
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    fetch(userUrl)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        this.setState({ photos: data.meals });
   
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return (
      <>
        <div className="main-container">
          <div className="title-container">
            <h1 className="directory-name">LuxeVue Grill Chicago </h1>

            <img
              src="https://i.pinimg.com/originals/21/6e/41/216e415824c35e1c7eab0a9a2485604b.jpg"
              className="header-logo"
            />
          </div>
        </div>

        <div className="App">
          <div className="image-container">
            <Restaurant photos={this.state.photos} />
           
        
      
          </div>
        </div>
      </>
    );
  }
}

export default App;

// <div className="card">
// <button onClick={() => setCount((count) => count + 1)}>
//   count is {count}
// </button>
// <p>
//   Edit <code>src/App.jsx</code> and save to test HMR
// </p>
// </div>
