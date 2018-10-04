import React, { Component } from 'react';
import './App.scss';

const colors = {
  defaultOrange: {
    name: "orange",
    variable: "$color-primary-1-normal",
    hex: "#F58025"
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="logo" />
          <p className="title">Digital Library</p>
        </div>
        <div className="body-section row">
          <div className="sidebar">
            <p>Overview</p>
            <p>UI Elements</p>
            <ul>
              <li>Colours</li>
              <li>Buttons</li>
            </ul>
          </div>
          <div className="main-body">
            <h2>Colors</h2>
            <p>To avoid specifying color values by hand, we'be included a robust set of color variables. For maintainability, please use these instead of hardcoding color values.</p>
            <div className="row">
              <div className="col-3 color">
                <div className="colorbg orange" />
                <div className="caption">
                  <p className="bold">$color-primary-1-normal</p>
                  <p>#F58025</p>
                </div>
              </div>
              <div className="col-3 color">
                <div className="colorbg coolblack" />
                <div className="caption">
                  <p className="bold">$color-primary-2-normal</p>
                  <p>#464958</p>
                </div>
              </div>
              <div className="col-3 color">
                <div className="colorbg warmorange" />
                <div className="caption">
                  <p className="bold">$color-primary-1-dark</p>
                  <p>#F26526</p>
                </div>
              </div>
              <div className="col-3 color">
                <div className="colorbg yellow" />
                <div className="caption">
                  <p className="bold">$crazy-ass-yellow</p>
                  <p>#FFCD00</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
