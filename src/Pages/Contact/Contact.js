import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-300 mx-96 text-center">
            <input className="mt-2 rounded-lg mb-4 p-2" type="email" placeholder="Name" />
            <br />
            <input className=" rounded-lg mb-4 p-2" type="email" placeholder="Enter your email" />
            <br />
            <input className="rounded-lg mb-4 p-2" type="password" placeholder="Enter password" />
            <br />
        </div>
    );
};

export default Contact;