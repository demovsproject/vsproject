import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
function Donerlog() {
    return (

        <div className='donerreg'>
            <Form>
            <h1>Doner Login</h1>
            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />

            </Form.Group>


            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>


            <Button style={{ width: "100%" }} variant="primary" type="submit">
                Login
            </Button>


            <Button style={{width:'100%',marginTop:'4%'}}><Link style={{textDecoration:'none',color:"white"}} to="/donerreg">Create one</Link></Button>

        </Form>
     </div >
    )
}

export default Donerlog;