import React, { useState } from 'react'
import login from '../images/log-in.png'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export const Login = (props) => {

    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        let responseData = '';
        await axios.post(props.url+'/login', credentials).then(response => {
            responseData = response;
        });
        console.log(responseData);
        console.log(responseData.data.success);
        if(responseData.data.success){
            //save the authtoken and redirect
            localStorage.setItem('token', responseData.data.authToken);
            navigate('/home')
        } else {
            alert("Invalid Email or Password");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <div className="container text-center mt-5">
                <form className="mt-5" style={{ width: "100%", maxWidth: "500px", margin: "auto" }} onSubmit={handleSubmit}>
                    <img className="mb-3" src={login} alt="" style={{ height: "200px", width: "200px" }} />
                    <div className="mb-3 form-floating">
                        <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} name="email" placeholder="Your Email Address" />
                        <label htmlFor="email" >Email address</label>

                    </div>
                    <div className="mb-3 form-floating">
                        <input type="password" className="form-control" id="password" value={credentials.password} onChange={onChange} name="password" placeholder="Your Password" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="mb-3 px-5 ">
                        <button type="submit" className="btn btn-primary btn-lg">Log In</button>
                    </div>
                    <div>
                        <Link to="/signup"><h6 className="text-secondary">Don't have account ? Sign Up Here!!</h6></Link>
                        <Link to="/forgotpassword"><h6 className="text-secondary">Forgot Password ?</h6></Link>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}
