import React from 'react'
import { Button, Form } from 'react-bootstrap'

function DetailsForm() {
    return (
        <div style={{ width: '100%', display: "flex", justifyContent: 'center' }}>
            <Form style={{ width: "40%" }}>
                <h1>Details</h1>
                <Form.Group className="mb-3"  >
                    <Form.Label>Enter Full Name</Form.Label>
                    <Form.Control type="text" name='userName' placeholder="Enter your name" />

                </Form.Group>
                <tittle>Gender : </tittle>
                <select>
                    <option >Male</option>
                    <option >FeMale</option>
                    <option >Others</option>

                </select>
                <tittle> Date Of Birth : </tittle>
                <input type='date' />
                <Form.Group className="mb-3"  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="Email" e='Email' placeholder="Enter Email" />

                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" me='number' placeholder="Enter number" />

                </Form.Group>
                <div >
                <label for="street">Street Address:</label><br />
                <input style={{width:"100%",border:"1px solid grey",borderRadius:"2px"}} type="text" id="street" name="street" /><br />

                <label for="city">City:</label><br />
                <input style={{width:"100%",border:"1px solid grey",borderRadius:"2px"}} type="text" id="city" name="city" /><br />

                <label for="state">State:</label><br />
                <input style={{width:"100%",border:"1px solid grey",borderRadius:"2px"}} type="text" id="state" name="state" /><br />

                <label for="zip">Postal Code:</label><br />
                <input style={{width:"100%",border:"1px solid grey",borderRadius:"2px"}} type="text" id="zip" name="zip" /><br />

                <label for="country">Country:</label><br />
                <input style={{width:"100%",border:"1px solid grey",borderRadius:"2px"}} type="text" id="country" name="country" /><br />

                </div>
                

                <select className='mt-2 mb-2'>
                    <option  >Select the blood Group</option>
                    <option  value="A+">A+</option>
                    <option  value="A-">A-</option>
                    <option  value="B+">B+</option>
                    <option  value="B-">B-</option>
                    <option  value="O+">O+</option>
                    <option  value="O-">O-</option>
                    <option  value="AB+">AB+</option>
                    <option  value="AB-">AB-</option>

                </select><tittle> Units of blood : </tittle>
                <input type='number' placeholder='Quantity'/>
                <label for="adhar">Adhar Number : </label>
                <input type='file' id='adhar'/>
                <Button style={{ width: "100%",marginTop:'10px' }} variant="primary" type="submit">
                  Submit
                </Button>
            </Form>
        </div>
    )
}

export default DetailsForm