import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../Shared/SideBar/SideBar';
import { useState } from 'react';
import AllOrdersList from '../../Admin/AllOrdersList/AllOrdersList';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [indivOrderList, setIndivOrderList] = useState([]);

    useEffect(() => {
        fetch('https://secret-eyrie-95562.herokuapp.com/servicelistByEmail?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setIndivOrderList(data))
    }, [indivOrderList])


    return (

        <section>
            <div className="row">
                <div className="col-md-2">
                    <SideBar />

                </div>
                <div className="col-md-10">
                    <div className="row mt-3 bookings">
                        <h2 className="text-left col-md-6">Order</h2>
                        <h3 className="text-right col-md-6">{loggedInUser.name}</h3>
                    </div> <br />
                    <div style={{ backgroundColor: '#f4f7fc' }} className="p-1">
                        <div className="row m-1">

                            {
                                indivOrderList.map(list =>
                                    <div className="card col-md-3 p-1 ml-5 mt-2 mb-2" style={{ width: '18rem' }}>
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <h5 className="card-title">{list.service}</h5>
                                                <button type="button" className="btn btn-danger">Pending</button>
                                            </div> <br />
                                            <p className="card-title text-secondary">Name: {list.name}</p>
                                            <p className="card-text text-secondary">Price: {list.price}</p>

                                        </div>
                                    </div>
                                )
                            }

                        </div>

                        <AllOrdersList />
                    </div>

                </div>
            </div>

        </section>

    );
};

export default ServiceList;