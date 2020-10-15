import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';
import SideBar from '../../../Shared/SideBar/SideBar';

const OrderForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('https://secret-eyrie-95562.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Your Order Submit successfully.');
                }
            })
    }
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
                    <form style={{ backgroundColor: '#f4f7fc' }} className="p-5 card " onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="text" defaultValue={loggedInUser.name} ref={register({ required: true })} name="name" placeholder="Your Name / Company's Name" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" defaultValue={loggedInUser.email} ref={register({ required: true })} name="email" placeholder="Your Email" className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <select className="form-control" name="service" ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select Service</option>
                                <option value="web-mob-design">web and mobile design</option>
                                <option value="graphic-design">Graphic Design</option>
                                <option value="web-dev">Web development</option>
                                <option value="Others">Others</option>
                            </select>
                            {errors.service && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="project" placeholder="project details" className="form-control" />
                            {errors.project && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="number" ref={register({ required: true })} name="price" placeholder="1000 swiss franc" className="form-control" />
                            {errors.price && <span className="text-danger">This field is required</span>}
                        </div>
                        <div>
                            <input type="file" placeholder="upload image" />
                        </div> <br />
                        <div className="form-group text-left">
                            <button type="submit" className="btn btn-brand">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default OrderForm;