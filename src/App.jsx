import React, { Component } from "react";
import Footer from "./Components/Footer";
import "./Components/Restaurant.css";
import "./Components/Header.css";
import "./Components/Footer.css";
import Header from "./Components/Header";
import Restaurant from "./Components/Restaurant";
import { useState } from "react";

// const isMobileDevice = useMediaQuery({
//   query: "(min-device-width: 480px)",
// });

// const isTabletDevice = useMediaQuery({
//   query: "(min-device-width: 768px)",
// });

// const isLaptop = useMediaQuery({
//   query: "(min-device-width: 1024px)",
// });

// const isDesktop = useMediaQuery({
//   query: "(min-device-width: 1200px)",
// });


const userUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=e";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      photos: [],
      menuInfo: [],
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
            <div className="co-title">
              Phone: (312) 226-7777 <br></br>
              Address: 100 E. Rush Ave, Chicago, IL 60654<br></br>
              Hours: Monday - Friday: 11:00am - 10:00pm <br></br>
              Saturday: 11:00am - 12:00pm <br></br>
              Sunday: 12:00pm - 4:00pm <br></br>
            </div>
          </div>
        </div>

        <div className="App">
          <div className="image-container">
            <Restaurant photos={this.state.photos} />
          </div>
        </div>
        <Footer />
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
