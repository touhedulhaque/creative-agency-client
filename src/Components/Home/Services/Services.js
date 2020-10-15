import React, { useState, useEffect } from 'react';
import web from '../../../images/icons/service1.png';
import graphic from '../../../images/icons/service2.png';
import dev from '../../../images/icons/service3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Web & Mobile design',
        img: web,
        detail: 'We Craft stunning and amazing web UI using a well drafted UX to fit your product.'
    },
    {
        name: 'Graphic Design',
        img: graphic,
        detail: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        name: 'Web Development',
        img: dev,
        detail: 'With well written codes we build amazing apps for all platforms mobile and web apps in general.'
    }
]

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://secret-eyrie-95562.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className="services-container mt-5 mb-1 p-1">
            <div className="text-center">
                <h3>Provide awesome <span style={{color: '#7ab259'}}>services</span> </h3>
            </div>
            <div className="d-flex justify-content-around">
                <div className="w-75 row mt-5 pt-5">
                    {
                        services.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }

                </div>
            </div>

        </section>
    );
};

export default Services;