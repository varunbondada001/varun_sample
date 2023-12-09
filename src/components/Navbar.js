import React from 'react'
import { BrowserRouter as Router,Routes, Link } from "react-router-dom";

function Navbar(props) {
  // const colorOptions=[
  //   {name:"Blue",backgroundColor:"blue"},
  //   {name:"Red",backgroundColor:"red"},
  //   {name:"Yellow",backgroundColor:"yellow"},
  //   {name:"Purple",backgroundColor:"purple"}
  // ];

  // const handleColorChange=(color)=>{
  //   document.body.style.backgroundColor = color;
  // };

  return (
    <div>
    <nav className={`navbar bg-${props.mode} border-bottom border-bottom-${props.mode}`} >
    <div className="container-fluid">
      <Link className={`navbar-brand  text-${props.mode === "light" ? "dark" : "light"}`}  to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"/>Enable darkMode
      </div>

      {/* <div>
          {colorOptions.map((colorOption, index) => (
            <button
              key={index}
              onClick={() => handleColorChange(colorOption.backgroundColor)}
              className="btn mx-1"
              style={{
                backgroundColor: colorOption.backgroundColor,
                color: "white",
              }}
            >
              {colorOption.name}
            </button>
          ))}
        </div>

        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.enableDarkmode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable DarkMode
          </label>
        </div> */}
    
  </div>
  </div>
  </nav>
    </div>
  )
}

export default Navbar
