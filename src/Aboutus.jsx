import React from 'react'
import about from "./New folder/donar.png"
function Aboutus() {
  return (
    <div>
       <div >
  
  <body>
    <div className="container">
      <header className="header">
        <div className="content">
          <h1><span>About Us</span><br /></h1>
          <p>
            The MVV NGO is the Non-Government Organization which provide blood donation and organ donation direct to the customers and doners with the aggrecation of NGO. The NGO is Organized by the Founders Manikavasakar, Vengadeshwaran and Vignesh. Which was focus to deliver Organs without any interrupts or extra fee.
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
  </body>
</div>

    </div>
  )
}

export default Aboutus