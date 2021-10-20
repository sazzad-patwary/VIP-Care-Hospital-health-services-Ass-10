import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {

    const { handleUserRegister } = useFirebase();
    // console.log(user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleRegister = () => {
        handleUserRegister(email, password);
    }

    return (
        <div>
            <div className=" my-10 mx-96    ">
                <div className=" text-center bg-gray-100 p-5">
                    <h2 className="font-bold text-xl">Please Register</h2>
                    <form className="my-2">
                        <input onChange={handleEmail} className="rounded-lg mb-4 p-2" type="email" placeholder="Enter your email" />
                        <br />
                        <input onChange={handlePassword} className="rounded-lg mb-4 p-2" type="password" placeholder="Enter password" />
                        <br />
                        <button onClick={handleRegister} className="font-normal text-white rounded-lg w-auto p-2 bg-indigo-700">Register</button><br />

                    </form>
                    <p>I have an account.. <Link className="text-purple-700 font-medium" to="/login">Login</Link></p>

                </div>
            </div>

        </div>
    );
};

export default Register;