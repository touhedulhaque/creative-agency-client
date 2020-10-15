import React from 'react';

const OrdersAll = ({orders}) => {
    return (
        <table className="table table-borderless p-3">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Customer Name</th>
                <th className="text-secondary" scope="col">Service Name</th>
                <th className="text-secondary" scope="col">Price</th>
                <th className="text-secondary" scope="col">Delivery Status</th>
                </tr>
                
            </thead>
            <tbody>   
            {
                  orders.map((order, index) => 
                        
                    <tr>
                        <td>{order.name}</td>
                        <td>{order.service}</td>
                        <td>{order.price}</td>
                        <td> <button type="button" class="btn btn-danger">Pending</button> </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default OrdersAll;