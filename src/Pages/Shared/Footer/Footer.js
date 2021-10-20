import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="main-footer bg-gray-500 text-center py-10 mt-10">
            <div className="row">
                <div>
                    {/* Column1 */}
                    <div className="grid grid-cols-3">
                        <p>About Us</p>

                        <p>Facebook</p>
                        <p>About Departments</p>

                    </div>
                    {/* Column2 */}
                    <div className="grid grid-cols-3">
                        <p>About services</p>
                        <p>Twitter</p>
                        <p>Services</p>


                    </div>
                    {/* Column3 */}
                    <div className="grid grid-cols-3">
                        <p>Our services</p>
                        <p>LinkedIn</p>
                        <p>Contact Us</p>
                    </div>
                </div>

                <div className="row text-center pt-10">
                    <p className="col">
                        &copy;{new Date().getFullYear()} VIP Hospital | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;