import humanbg from "./New folder/bg1.jpeg"
import React from 'react'
import { Button, NavDropdown } from "react-bootstrap"
import Navbarr from "./Navbarr"

function App() {
  return (

    <>
      <div className="container">
        <Navbarr />
        <header className="header">
          <div className="content">
            <h1><span>A dose of kindness,a prescription for </span><br />Change.</h1>
           <a href="mailto:batchamanic960@gmail.com" target="_blank"> <Button className="btn ">Contact Us</Button></a>
          </div>
          <div className="image">
            <span className="image__bg"></span>
            <img src={humanbg} alt="header image" />

          </div>
        </header>
      </div>
    </>

  )
}

export default App