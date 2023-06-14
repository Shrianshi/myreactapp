import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Delete() {
  const [p, setP] = useState([]);
  const[alertMessage,setAlertMessage]=useState('');
  const[searchId,,setSearchId]=useState('');
  const[editableRowId,setEditableRowId]=useState(null);
  const[updateData,setUpdatedData]=useState({});
  
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData=()=>{
    axios
    .get(`https://localhost:7118/api/Doctor`)
    .then(res=>{
        console.log(res);
        setUpdatedData(res.data);
    })
    .catch(err=>{
        console.log(err);
    });
  };

  useEffect(() => {
    axios
      .get('https://localhost:7118/api/Doctor')
      .then(res => {
        console.log(res);
        setP(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`https://localhost:7045/api/Doctors/${id}`)
      .then(res => {
        console.log(res);
        // Filter out the deleted item from the state
        const updatedP = p.filter(item => item.id !== id);
        setP(updatedP);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const updatehandle=id=>{
    axios
    .put(`https://localhost:7045/api/Doctors/${id}`,updateData)
    .then(res=>{
        console.log(res);
        setAlertMessage(`Data with id ${id} has been updated.`);
        setEditableRowId(null);
        fetchData();
    })
    .catch(err=>{
        console.log(err);
    });
  };



  return (
    <div>
      {/* <ul>
        {p.map(pdata => (
          <li key={pdata.id}>
            {pdata.id}, {pdata.name}, {pdata.role}
            <button onClick={() => deleteHandler(pdata.id)}>Delete</button>
            <button onClick={() => updatehandle(pdata.id)}>Update</button>
          </li>
        ))}
      </ul> */}
      <p>Number of records available: {p.length}</p>
      <table class="table table-success table-hover">
        <thead>
            <tr>
                <th>DOC-ID</th>
                <th>DOC-NAME</th>
                <th>DOC-ROLE</th>
                <th>DELETE</th>
                <th>UPDATE</th>
            </tr>
        </thead>
        <tbody>
        {p.map(pdata => (
            <tr key={pdata.id}>
                <td>{pdata.id}</td>
                <td>{pdata.name}</td>
                <td>{pdata.role}</td>
                <td><button class="btn btn-danger" onClick={() => deleteHandler(pdata.id)}>Delete</button></td>
                <td><button class="btn btn-warning" onClick={() => updatehandle(pdata.id)}>Update</button></td>
            </tr>
        ))}
            
        </tbody>
      </table>
    </div>
  );
}

export default Delete;