import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export const Home = (props) => {

    const [name, setname] = useState("")

    let navigate = useNavigate();

    useEffect(() => {
        let authToken = localStorage.getItem('token');
        console.log(authToken);


        axios.post(props.url+'/getUser', {}, {
            "headers": {
                "Content-Type": "application/json",
                "auth-token": authToken
            }
        }).then(response => {
            console.log(response.data);
            setname(response.data.name)
        });
        // console.log(responseData);
        //name = responseData.name;
        console.log(name);
    }, [name]);

    const handleClick = () => {
        localStorage.clear();
        navigate('/login')
    }

    return (
        <div>

            <div className="container text-center mt-5 pt-5">
                <h1>Welcome {name}</h1>
                <button className="btn btn-primary btn-lg mt-5" onClick={handleClick}>Log Out</button>
            </div>
        </div>
    )
}
