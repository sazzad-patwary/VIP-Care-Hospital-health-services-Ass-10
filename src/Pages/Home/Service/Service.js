import React from 'react';

const Service = ({ service }) => {
    const { picture, title, details } = service;
    return (
        <div>
            <div className="rounded-lg bg-gray-50 p-5 text-center">
                <div>
                    <img className="h-52" src={picture} alt="" />
                </div>
                <div className="mt-5">
                    <h3 className="font-bold text-xl">{title}</h3>
                    <p>{details.slice(0, 70)}</p>
                    <button className="bg-indigo-600 w-20 h-8 text-white rounded-lg ">Details</button>
                </div>
            </div>

        </div>
    );
};

export default Service;