import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {

    const { user, logOut } = useFirebase();


    return (
        <div >
            <div className="relative bg-white-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">

                        <div className="hidden md:flex space-x-10">
                            <Link to="/home" className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                                Home</Link>
                            <Link to="/service" className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                                Services</Link>
                            <Link to="/specialist" className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                                Doctors</Link>
                            <Link to="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                                Contact</Link>
                        </div>
                        <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                            {
                                user.displayName ?
                                    <div>{user.displayName}
                                        <button onClick={logOut} className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                                            Log Out</button>
                                    </div>
                                    :
                                    <div>
                                        <Link to="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                                            Log in</Link>
                                        <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                                            Register
                                        </button>
                                    </div>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;