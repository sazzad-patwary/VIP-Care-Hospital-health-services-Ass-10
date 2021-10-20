import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="pt-10 mx-32">
                <h1 className="text-3xl font-semibold text-center">Services</h1>
                <div className="h-auto pt-10 grid grid-cols-3 auto-cols-max md:auto-cols-min gap-8">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        >
                        </Service>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;