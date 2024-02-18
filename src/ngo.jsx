
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Ngolog() {
    return (

        <div className='donerreg'>
            <Form>
                <h1>NGO Login</h1>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter UserId</Form.Label>
                    <Form.Control type="text" placeholder="Enter id" />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button style={{ width: "100%" }} variant="primary" type="submit">
                    Login
                </Button>
                

            </Form>
        </div>
    )
}

export default Ngolog