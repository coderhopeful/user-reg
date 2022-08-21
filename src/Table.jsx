import React from 'react'
import "./table.css"

const Table = ({users}) => {
    
  return (
    
   <>
   
      <h1>User Data</h1>
 
        
      <table className="table">
        <thead>
            <tr>
        <th>Name</th>
        <th>DOB/Age</th>
        <th>Sex</th>
        <th>Mobile</th>
        <th>Govt ID Type</th>
        <th>ID Number</th>
        <th>Email</th>
        </tr>
        </thead>
        {
        users.map(user=>(
            <tbody>
        <tr className="table-row">
           <td>{user.values.personName}</td>
           <td>{user.values.age}</td>
           <td>{user.values.sex}</td>
           <td>{user.values.mobile}</td>
           <td>{user.values.govtIDType}</td>
           <td>{user.values.govtIDNumber}</td>
           <td>{user.values.email}</td>
            
            </tr>
            </tbody>
       )) }
        </table>
      
   
   </>
  )
}

export default Table