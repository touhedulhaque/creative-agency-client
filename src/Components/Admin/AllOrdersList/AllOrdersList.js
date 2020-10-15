import React, { useEffect } from 'react';
import { useState } from 'react';
import OrdersAll from './OrdersAll/OrdersAll';


const AllOrdersList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://secret-eyrie-95562.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="text-center">
            <h3><u>Total Orders (Admin): {orders.length}</u></h3>
            {
                <OrdersAll orders={orders}></OrdersAll> 
            }
        </div>
    );
};

export default AllOrdersList;