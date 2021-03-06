import React, { useEffect } from 'react';
import { useState } from 'react';
import VolunteerType from '../VolunteerType/VolunteerType';
// import fakeData from '../../fakeData/fakeData'

const Volunteer = () => {
    const [volunteer, setVolunteer] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/allEvents')
        .then(response => response.json())
        .then(data => setVolunteer(data))
     },[])
    
    return (
        
        <div className="container">
            <div className="row mt-3">
            {
                volunteer.map(volunteer => <VolunteerType volunteer={volunteer} key={volunteer.id}></VolunteerType>)
            }
        </div>
        </div>
    );
};

export default Volunteer;