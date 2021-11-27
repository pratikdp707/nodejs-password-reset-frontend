import React,{useState} from 'react'
import login from '../images/log-in.png'
import axios from 'axios'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
export const ResetPassword = (props) => {

    const [password, setpassword] = useState("")
    const navigate = useNavigate();
    const params = useParams();
    const {id,token} = params
    const handleSubmit = async (e) => {
        e.preventDefault();
        let responseData = '';
        await axios.post(props.url+'/resetPassword', {id,token,password}).then(response => {
            responseData = response;
            console.log(responseData);
        });
        if(responseData.data.success){
            alert("Your Password has been changed");
            navigate("/login")
        }
    }

    const onChange = (e) => {
        setpassword(e.target.value);
    }

    return (
        <div>
            <div className="container text-center mt-5">
                <form className="mt-5" style={{ width: "100%", maxWidth: "500px", margin: "auto" }} onSubmit={handleSubmit}>
                    <img className="mb-3" src={login} alt="" style={{ height: "200px", width: "200px" }} />
                    <div className="mb-3 form-floating">
                        <input type="password" className="form-control" id="password" value={password} onChange={onChange} name="password" placeholder="Your Email Address" />
                        <label htmlFor="email" >New password</label>

                    </div>
                    <div className="mb-3 px-5 ">
                        <button type="submit" className="btn btn-primary btn-lg">Confirm Password</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
