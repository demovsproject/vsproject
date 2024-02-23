import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import b from "./New folder/b-.jpeg";
import bl1 from "./New folder/bl1.jpeg";
import bl2 from "./New folder/bl2.jpeg";
import bl3 from "./New folder/bl3.jpeg";

import bl5 from "./New folder/bl5.jpeg";
import bl6 from "./New folder/bl6.jpeg";
import bl8 from "./New folder/bl8.jpeg";

import bl4 from "./New folder/bl4.jpeg";
import bg from "./New folder/bg2.jpeg"
import { Link } from 'react-router-dom';
import Navbarr from './Navbarr';
function Blood() {
  return (
    <>
    <Navbarr/>
    <div className='bloodbg' >
      <div className='bg1'>
        <img src={bg} style={{ height: '100vh' }} />
      </div>
      <div className='bg2'>
      <Card style={{ width: '10rem', height: "10rem", alignItems: "center" }}>
          <Link to="/details">
            <Card.Img variant="top" src={bl8} />
          </Link>
          <Card.Body>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem', height: "10rem", alignItems: "center" }}>
          <Link to="/details">
            <Card.Img variant="top" src={bl1} />
          </Link>
          <Card.Body>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem', height: "10rem", alignItems: "center" }}>
          <Link to="/details">
            <Card.Img variant="top" src={bl6} />
          </Link>
          <Card.Body>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem', height: "10rem", alignItems: "center" }}>
          <Link to="/details">
            <Card.Img variant="top" src={b} />
          </Link>
          <Card.Body>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem', height: "10rem", alignItems: "center" }}>
          <Link to="/details">
            <Card.Img variant="top" src={bl2} />
          </Link>
          <Card.Body>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem', height: "10rem", alignItems: "center" }}>
          <Link to="/details">
          </Link>
            <Card.Img variant="top" src={bl3} />
          <Card.Body>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem', height: "10rem", alignItems: "center" }}>
          <Link to="/details">
            <Card.Img variant="top" src={bl4} />
          </Link>
          <Card.Body>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem', height: "10rem", alignItems: "center" }}>
          <Link to="/details">
            <Card.Img variant="top" src={bl5} />
          </Link>
          <Card.Body>
          </Card.Body>
        </Card>
      </div>

    </div>
    </>
  );
}




export default Blood