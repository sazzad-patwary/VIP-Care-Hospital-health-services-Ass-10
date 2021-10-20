import React from 'react';
// import { Link } from 'react-router-dom';


const Specialist = ({ specialist }) => {

    const { picture, name, about } = specialist;


    return (
        <div>
            <div className="rounded-lg bg-gray-50 p-5 text-center">
                <div>
                    <img className="w-auto " src={picture} alt="" />
                </div>
                <div className="mt-5">
                    <h3 className="font-bold text-xl">{name}</h3>
                    <p className="text-red-500">{about}</p>
                    <button className="bg-indigo-600 w-auto px-2 h-8 text-white rounded-lg mt-2">Book Appoinment</button>

                    {/*   <div>
                    {!user?.email ? <Link to="/login">  <button className="bg-indigo-600 w-auto px-2 h-8 text-white rounded-lg mt-2">Book Appoinment</button> </Link>
                        :
                        <Link to="/cart"><button className="btn btn-secondary  my-4">Checkout Your Food</button> </Link>
                    }
                </div> */}
                </div>
            </div>

        </div>
    );
};

export default Specialist;