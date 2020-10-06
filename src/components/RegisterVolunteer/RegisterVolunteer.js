import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllRegVolunteer = () => {
    const [register, setRegister] = useState([])

    useEffect(() => {
        
        fetch('http://localhost:5000/allVolunteer')
            .then(response => response.json())
            .then(data => setRegister(data))
    }, [register])


    const deleteEvent = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(result => {
            if(result){
                console.log(result)
            }    
        })
    }
    return (
        <div className="container my-3">
            <h2>Volunteer register list</h2>
                    <div className="container">
                        <Table>
                            <thead>
                                <tr className="text-center">
                                    <th>Name</th>
                                    <th></th>
                                    <th>Email ID</th>
                                    <th></th>
                                    <th>Registration Date</th>
                                    <th>Volunteer List</th>
                                    
                                </tr>
                            </thead>
                        </Table>
                    </div>
                    {
                        register.map(reg =>
                            <div className="container" key={reg.id}>
                                <Table striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td> {reg.name}</td>
                                            <td>{reg.email}</td>
                                            <td>{reg.registrationDate}</td>
                                            <td>{reg.volunteerEvent}</td>
                                            
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        )
                    }
        </div>
    );
};

export default AllRegVolunteer;