import React from 'react'
import {Link} from 'react-router-dom'
export const Landing = () => {
    return (
        <div>
            <div className="container text-center mt-5 pt-5">
                <Link to="/login"><button className="btn btn-primary btn-lg mx-5">Sign In</button></Link>
                <Link to="/signup"><button className="btn btn-primary btn-lg mx-5">Sign Up</button></Link>
            </div>
        </div>
    )
}
