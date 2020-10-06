import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const RegisterList = () => {
    const [registers, setRegister] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(()=>{
        fetch('http://localhost:5000/registerList?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setRegister(data))
    },[])
    return (
        <div>
               <h3 style={{textAlign:'center', color:'white' ,backgroundColor:'orange'}}>YAY YOU SUCCESSFULLY REGISTER:{registers.length}</h3>
               {
                   registers.map(reg=> <li><strong>Event-ID:</strong>{reg._id}   <strong>User-Name:</strong>{reg.name}   </li>)
               }
         </div>
    );
};

export default RegisterList;
