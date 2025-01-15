import React from 'react'
import about from "./New folder/donar.png"
import Navbarr from './Navbarr'
function Aboutus() {
  return (
    <div>
       <div >
  
  <>
    <div className="container">
      <Navbarr/>
      <header className="header">
        <div className="content">
          <h1><span>About Us</span><br /></h1>
          <p>
single para content
Welcome to Vistawin Solutions! At Vistawin Solutions, we are dedicated to providing cutting-edge software solutions tailored to your business needs. Whether you're looking to streamline operations with our ERP systems, enhance customer relationships with our CRM software, or optimize your supply chain, our expert team is here to deliver innovative, reliable, and efficient solutions. With a focus on quality and customer satisfaction, we strive to empower businesses to achieve their full potential and drive success. Let's elevate your business together!
          </p>
        </div>
        <div className="image">
          <span className="image__bg"></span>
          <img src={about} alt="header image" />
        </div>
      </header>
    </div>
    <footer>
      <p>&copy; 2024 MVV NGO. All rights reserved.</p>
    </footer>
  </>
</div>

    </div>
  )
}

export default Aboutus
