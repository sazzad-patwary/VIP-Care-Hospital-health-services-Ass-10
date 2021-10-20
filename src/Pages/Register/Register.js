import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className=" my-10 mx-96    ">
                <div className=" text-center bg-gray-100 p-5">
                    <h2 className="font-bold text-xl">Please Register</h2>
                    <form className="my-2">
                        <input className="rounded-lg mb-4 p-2" type="email" placeholder="Enter your email" />
                        <br />
                        <input className="rounded-lg mb-4 p-2" type="password" placeholder="Enter password" />
                        <br />
                        <input className="rounded-lg mb-4 p-2" type="password" placeholder="Re-enter password" />
                        <br />
                        <input className="font-normal text-white rounded-lg w-auto p-2 bg-indigo-700" type="submit" value="submit" /><br />

                    </form>
                    <p>I have an account.. <Link className="text-purple-700 font-medium" to="/login">Login</Link></p>

                </div>
            </div>

        </div>
    );
};

export default Register;