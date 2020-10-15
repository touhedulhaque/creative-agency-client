import React from 'react';
import graphic from '../../../images/icons/service2.png';
import { Link } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'

const ServiceDetail = ({service}) => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      })
    return (
        <div className="col-md-4 text-center card-style pt-3">
            <Link to="/order"><img style={{height: '50px'}} src={graphic} alt="" /></Link>
            <Link to="/order"><h5 className="mt-3 mb-3">{service.serviceName}</h5></Link>
            <Link to="/order"><p className="text-secondary">{service.description}</p></Link>
        </div>
    );
};

export default ServiceDetail;