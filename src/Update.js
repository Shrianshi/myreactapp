import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetch() {
    const [p, setP] = useState([]);
    const [deleteHid, setDeleteHid] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');
    const [editData, setEditData] = useState({});
    const [editMessage, setEditMessage] = useState('');
    const [filterLocation, setFilterLocation] = useState('');
    const [addData, setAddData] = useState({});
    const [addMessage, setAddMessage] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios
            .get('https://localhost:7118/api/Doctor')
            .then(res => {
                console.log(res);
                setP(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const deleteHotel = (id) => {
        axios
            .delete(`https://localhost:7118/api/Doctor/${id}`)
            .then(res => {
                console.log(res);
                setDeleteMessage('Data deleted successfully!');
                fetchData(); // Fetch updated data after deletion
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleEdit = (id) => {
        const hotelToUpdate = p.find(pdata => pdata.id === id);
        setEditData(hotelToUpdate);
    };

    // const handleInputChange = (e, id) => {
    //     const { name, value } = e.target;
    //     setP(prevP =>
    //       prevP.map(pdata =>
    //         pdata.id === id ? { ...pdata, [name]: value } : pdata
    //       )
    //     );
    //   };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`https://localhost:7118/api/Doctor/${editData.id}`, editData)
            .then(res => {
                console.log(res);
                setEditMessage('Data updated successfully!');
                fetchData();
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleFilterChange = (e) => {
        setFilterLocation(e.target.value);
    };

    const handleAddInputChange = (e) => {
        const { name, value } = e.target;
        setAddData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleAdd = () => {
        axios
            .post('https://localhost:7118/api/Doctor', addData)
            .then(res => {
                console.log(res);
                setAddMessage('Data added successfully!');
                fetchData(); // Fetch updated data after adding
            })
            .catch(err => {
                console.log(err);
            });
    };

    const filteredData = p.filter(pdata =>
        pdata.role.toLowerCase().includes(filterLocation.toLowerCase())
    );

    return (
        <div className="container-fluid bg-success">
            <div className="form-group">
                <label htmlFor="filterLocation" className='text-light'>Filter by Role:</label>
                <input
                    type="text"
                    className="form-control"
                    id="filterLocation"
                    value={filterLocation}
                    onChange={handleFilterChange}
                />
            </div>
            <table className="table table-bordered mt-4 custom-table table-success table-hover">
                <thead className="thead-light">
                    <tr>
                        <th>DOC-ID</th>
                        <th>DOC-NAME</th>
                        <th>DOC-ROLE</th>
                        {/* <th>hprice</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(pdata => (
                        <tr key={pdata.id} className="table-row">
                            <td>{pdata.id}</td>
                            <td>
                                {editData.id === pdata.id ?
                                    (<input
                                        type="text"
                                        name="name"
                                        value={editData.name || ''}
                                        onChange={(e) =>  setEditData({ ...editData, name: e.target.value })}/>


                                    ) : (
                                        pdata.name
                                    )}
                            </td>
                            <td>{pdata.role}</td>
                            {/* <td>{pdata.hprice}</td> */}
                            <td>
                                {editData.id === pdata.id ? (
                                    <div>
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-sm"
                                            onClick={handleSubmit}>
                                            Save
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm"
                                            onClick={() => setEditData({})}>
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-sm mr-2"
                                            onClick={() => deleteHotel(pdata.id)}>
                                            Delete
                                        </button>
                                        <span className="mr-2" /> {/* Add this line to create space */}
                                        <button
                                            type="button"
                                            className="btn btn-dark btn-sm"
                                            onClick={() => handleEdit(pdata.id)}>
                                            Edit
                                        </button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {deleteMessage && (
                <div className="alert alert-danger mt-4" role="alert">
                    {deleteMessage}
                </div>
            )}
            {editMessage && (
                <div className="alert alert-danger mt-4" role="alert">
                    {editMessage}
                </div>
            )}
            <div className="form-group mt-4">
                <label htmlFor="addHname" className='text-light'>DOC-NAME:</label>
                <input
                    type="text"
                    className="form-control"
                    id="addHname"
                    name="name"
                    value={addData.name || ''}
                    onChange={handleAddInputChange} />
            </div>
            <div className="form-group">
                <label htmlFor="addHlocation" className='text-light'>DOC-ROLE:</label>
                <input
                    type="text"
                    className="form-control"
                    id="addHlocation"
                    name="role"
                    value={addData.role || ''}
                    onChange={handleAddInputChange} />
            </div>
            {/* <div className="form-group">
        <label htmlFor="addHprice">HPrice:</label>
        <input
          type="text"
          className="form-control"
          id="addHprice"
          name="hprice"
          value={addData.hprice || ''}
          onChange={handleAddInputChange}
        />
      </div> */}
            <button
                type="button"
                className="btn btn-warning"
                onClick={handleAdd}>
                Add Data
            </button>
            {addMessage && (
                <div className="alert alert-success mt-4" role="alert">
                    {addMessage}
                </div>
            )}
        </div>
    );
}



export default DataFetch;
