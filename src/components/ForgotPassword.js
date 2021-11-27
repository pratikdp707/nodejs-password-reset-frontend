import React,{useState} from 'react'
import login from '../images/log-in.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const ForgotPassword = (props) => {

    const [email, setEmail] = useState("")
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(email);
        let responseData = '';
        await axios.post(props.url+'/forgotPassword', {email}).then(response => {
            responseData = response;
        });
        console.log(responseData);
        if(responseData.data.success){
            alert("Check your email for details");
            navigate("/login")
        }
    }

    const onChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div>
            <div className="container text-center mt-5">
                <form className="mt-5" style={{ width: "100%", maxWidth: "500px", margin: "auto" }} onSubmit={handleSubmit}>
                    <img className="mb-3" src={login} alt="" style={{ height: "200px", width: "200px" }} />
                    <div className="mb-3 form-floating">
                        <input type="email" className="form-control" id="email" value={email} onChange={onChange} name="email" placeholder="Your Email Address" />
                        <label htmlFor="email" >Email address</label>

                    </div>
                    <div className="mb-3 px-5 ">
                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
