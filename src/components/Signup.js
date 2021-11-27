import React ,{useState} from 'react'
import signup from '../images/sign-up.png'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

export const Signup = (props) => {
    let navigate = useNavigate();
    const [userData, setuserData] = useState({
        name:"",
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        let responseData = '';
        await axios.post(props.url+'/createUser', userData).then(response => {
            responseData = response;
        });
        console.log(responseData.data.success);
        if(responseData.data.success){
            //save the authtoken and redirect
            localStorage.setItem('token', responseData.data.authToken);
            navigate('/login')
        } else {
            alert("Invalid Email or Password");
        }
    }

    const onChange = (e) => {
        setuserData({ ...userData, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <div className="container text-center mt-5">
                <form className="mt-5" style={{width:"100%", maxWidth:"500px", margin:"auto"}} onSubmit={handleSubmit}>
                    <img className="mb-3" src={signup} alt="" style={{height:"200px", width:"200px"}}/>
                    <div className="mb-3 form-floating">
                        <input type="text" className="form-control" id="name" name="name" value={userData.name} onChange={onChange} placeholder="Your Name"/>
                        <label htmlFor="name" >Name</label>
                        
                    </div>
                    <div className="mb-3 form-floating">
                        <input type="email" className="form-control" id="email" name="email" value={userData.email} onChange={onChange} placeholder="Your Email Address" />
                        <label htmlFor="email" >Email address</label>
                        
                    </div>
                    <div className="mb-3 form-floating">
                        <input type="password" className="form-control" id="password" name="password" value={userData.password} onChange={onChange} placeholder="Your Password" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="mb-3 px-5 ">
                        <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                    </div>
                    <div>
                        {/* <Link to="/"><h5>Don't have account ? Sign Up Here!!</h5></Link> */}
                        {/* <Link to="/"><h5>Forgot Password ?</h5></Link> */}
                        <Link to="/login"><h6 className="text-secondary">Already having account ? Sign In Here!!</h6></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
