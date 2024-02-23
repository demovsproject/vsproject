import React from 'react'
import contact from "./New folder/con3.webp"
function ContactUs() {
  return (
    <div>
      <div class="container">
      <header class="header">
        <div class="content">
          <h1><span>Contact Us</span><br /></h1>
          <p>
            The MVV Non-Government Organization provides Blood donation and Organ donation direct to the customers and doners. The NGO is Organized by the Founders Manikavasakar, Vengadeshwaran and Vignesh. Which was focus to deliver Organs without any interrupts or extra fee. For more details contact..
          </p>
          <h3> Our Teams</h3>
          <p>
                Manikavasakar
          </p><p>
                Vengadeshwaran
          </p><p>
               Vignesh
          </p>

        </div>
        <div class="image">
          <span class="image__bg"></span>
          <img src={contact} alt="header image" />
        </div>
      </header>
    </div>
    <footer>
        <p>&copy; 2024 MVV NGO. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default ContactUs