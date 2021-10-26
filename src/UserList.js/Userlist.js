import axios from "axios";
import React, {useState, useEffect} from "react";
import './../App.css';

function Userlist() {
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

// I add the <tbody> tag, because the tag table make some error.

  return (
    <div className="App">
      <table>
        <tbody>
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
            <tr key={index}>
              <td><div >{user.id}</div></td>
              <td><div>{user.name}</div></td>
              <td><div>{user.username}</div></td>              
              <td><div>{user.email}</div></td>
              <td><div>{user.address.street +user.address.street+ user.address.suit}</div></td>
              <td><div>{user.phone}</div></td>
              <td><div>{user.website}</div></td>
              <td><div>{user.company.name}</div></td>
            </tr>
        
        ))}
        </tbody>
        </table>
    </div>
  );
}

export default Userlist;
