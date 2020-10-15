import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const BrandImage = () => {
    return (
        <section>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-2 ml-4"><img src={slack} alt="" className="img-fluid" width="140px" /></div>
                    <div className="col-md-2 ml-4"><img src={google} alt="" className="img-fluid" width="140px" /></div>
                    <div className="col-md-2 ml-4"><img src={uber} alt="" className="img-fluid" width="140px" /></div>
                    <div className="col-md-2 ml-4"><img src={netflix} alt="" className="img-fluid" width="140px" /></div>
                    <div className="col-md-2 ml-4"><img src={airbnb} alt="" className="img-fluid" width="140px" /></div>
                </div>
            </div>
        </section>
    );
};

export default BrandImage;