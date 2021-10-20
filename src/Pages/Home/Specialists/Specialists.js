import React, { useEffect, useState } from 'react';
import Specialist from '../Specialist/Specialist';

const Specialists = () => {
    const [specialists, setSpecialists] = useState([])
    useEffect(() => {
        fetch('/specialist.json')
            .then(res => res.json())
            .then(data => setSpecialists(data));
        // .then(data => console.log(data))
    }, [])
    return (
        <div className="pt-10 mx-32">
            <h1 className="text-3xl font-semibold text-center">Doctors</h1>
            <div className="h-auto pt-10 grid grid-cols-3 auto-cols-max md:auto-cols-min gap-8">
                {


                    specialists.map(specialist => <Specialist
                        key={specialist.id}
                        specialist={specialist}
                    >

                    </Specialist>)
                }
            </div>
        </div>
    );
};

export default Specialists;