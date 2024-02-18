import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbarr() {
    return (

        <>
                <nav>
          <div className="nav__logo">MVV NGO</div>
          <ul className="nav__links">
            <Link to="/" className="link">Home</Link>
            <NavDropdown className="link" title="Donar" id="basic-nav-dropdown">
              <Link to="/donerreg"> Registration</Link><br></br>

              <Link to="/donerlog"> Login</Link>

            </NavDropdown>
            <NavDropdown className="link" title="Customer" id="basic-nav-dropdown">
              <Link to="/rereg">Registration</Link><br></br>

              <Link to="/relog">Login</Link>

            </NavDropdown>
            <NavDropdown className="link" title="Services" id="basic-nav-dropdown">
              <Link to="/blood">Blood Donation</Link><br></br>

                <Link to="/organ">Organs</Link><br></br>
              
            </NavDropdown>
            <Link to="/ngolog" className="link">NGO Login</Link>

            <Link to="/" className="link">Contact Us</Link>
            <Link to="/" className="link">About NGO</Link>
          </ul>

        </nav>
        </>
    );
}




export default Navbarr