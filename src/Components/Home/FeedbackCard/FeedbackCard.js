import React, { useState, useEffect } from 'react';
import img3 from '../../../images/customer-3.png'


const FeedbackCard = ({ feed }) => {
    
    
    return (

        <div className=" col-md-4 p-2 ">
            <div className="card-style p-4">
                <div className="d-flex align-items-center">
                    <div>
                        <img src={img3} alt="" width="80px" />
                    </div>
                    <div className="ml-3">
                        <h5>{feed.name}</h5>
                        <p>{feed.designation}</p>
                    </div>
                </div>
                <p className="text-secondary">{feed.description}</p>
            </div>


        </div>


    );
};

export default FeedbackCard;