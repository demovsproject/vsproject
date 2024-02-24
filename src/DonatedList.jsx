import axios from 'axios';
import { useState,useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import DonatedList1 from './DonatedList1';
import { Link, Navigate } from 'react-router-dom';

function DonatedList() {
    const hp = Navigate
    const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


const onClicked = ()=>{
const con =  confirm("Donar Will contact You Soon")
}
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:7007/user/donate-lists');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <Container className='mt-5 bg-dark text-white'>
    <h1>Blood Available : </h1>
    <Table style={{textAlign:"center"}}>
      <thead>
        <tr>
            <th>Donar Name</th>
            <th>BloodGroup</th>
            <th>Sex</th>
            <th>email</th>
          <th>For Need</th>
        </tr>
      </thead>
      <tbody>
          {data.map((data , index)=>(
        <tr key={index}>

                <td>{data.userName}</td>
         <td>{data.bloodGroup}</td>
         <td>{data.gender}</td> 
         <td>{data.email}</td>
         <td><Link to="" onClick={onClicked} style={{textDecoration:"none"}}>Click</Link></td>    
      
        </tr>
            )
            )}
        
      </tbody>
    </Table>
    <DonatedList1/>
    </Container>
  );
}

export default DonatedList;