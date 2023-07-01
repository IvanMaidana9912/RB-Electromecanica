import { Link } from 'react-router-dom';
import React from 'react'

export const Index = () => {
    return(
        <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
            <div className='d-flex justify-content-between'>
                <Link className='fs-1 text-decoration-none text-primary me-5' to={"/"}>Register</Link>
                <Link className='fs-1 text-decoration-none text-primary ms-5' to={"/LogIn/"}>Log In</Link>  
            </div>
        </div>
    )
}