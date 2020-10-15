import React from 'react';
import creative from '../../../images/logos/Frame.png';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main className="container">
            <div style={{height:'600px'}} className="row d-flex align-items-end">
            <div className="col-md-5">
                <h1 style={{fontWeight:'bold'}} class="mb-5">Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                <p className="mb-5 text-secondary">Business branding is that you can control, to some extent, what your business’s personality is, and you can creative polish your logo, your content etc.</p>
                <Link to="/order" className="btn btn-brand">Hire Us</Link>
            </div>
            <div className="col-md-7">
                <img src={creative} alt="" className="img-fluid"/>
            </div>

        </div>
        </main>
    );
};

export default HeaderMain;