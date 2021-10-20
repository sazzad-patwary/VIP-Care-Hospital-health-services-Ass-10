import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const { user, handleGoogleSignin, handleUserLogin } = useFirebase();
    // console.log(user);
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";


    const handleGoogleLogin = () => {
        handleGoogleSignin()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleLogin = () => {
        handleUserLogin(email, password);
    }

    return (
        <div className=" my-10 mx-96    ">
            <div className=" text-center bg-gray-100 p-5">
                <h2 className="font-bold text-xl">Please Login</h2>
                <form className="my-2">
                    <input onChange={handleEmail} className="rounded-lg mb-4 p-2" type="email" placeholder="Enter your email" />
                    <br />
                    <input onChange={handlePassword} className="rounded-lg mb-4 p-2" type="password" placeholder="Enter password" />
                    <br />
                    <button onClick={handleLogin} className="font-normal text-white rounded-lg w-auto p-2 bg-indigo-700">Login</button><br />

                </form>
                <p>New to make appoinment? <Link className="text-purple-700 font-medium" to="/register">Register</Link> at first</p>
                <br />
                <hr />
                <br />
                <button onClick={handleGoogleLogin} className="font-normal text-white rounded-lg w-auto p-2 bg-indigo-700">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;