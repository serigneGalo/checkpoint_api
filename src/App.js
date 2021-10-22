import axios from "axios";
import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  const [users,setUsers]= useState([])
  const fetchData= async()=>{
    const result= await axios(
      'https://jsonplaceholder.typicode.com/users'
    )
    setUsers(result.data)
  }
  useEffect(()=>{
    fetchData()
  })
  return (
    <div className="App">
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Adresse</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>


        </tr>
      
          {users.map((user, index) => (
            <tr>
              <td><div key={index}>{user.id}</div></td>
              <td><div key={index}>{user.name}</div></td>
              <td><div key={index}>{user.username}</div></td>              
              <td><div key={index}>{user.email}</div></td>
              <td><div key={index}>{user.address.street +user.address.street+ user.address.suit}</div></td>
              <td><div key={index}>{user.phone}</div></td>
              <td><div key={index}>{user.website}</div></td>
              <td><div key={index}>{user.company.name}</div></td>


            </tr>
        
        ))}
        </table>
    </div>
  );
}

export default App;
