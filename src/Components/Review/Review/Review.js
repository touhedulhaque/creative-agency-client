import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../Shared/SideBar/SideBar';
import { useForm } from "react-hook-form";

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        fetch('https://secret-eyrie-95562.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {

                    alert('Your Review Message Submit successfully.');
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
                        <h2 className="text-left col-md-6">Review</h2>
                        <h3 className="text-right col-md-6">{loggedInUser.name}</h3>
                    </div> <br />
                    <div style={{ backgroundColor: '#f4f7fc' }}>
                        <form style={{ backgroundColor: '#f4f7fc' }} className="p-5 card " onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" defaultValue={loggedInUser.name} ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="designation" placeholder="company's designation" className="form-control" />
                                {errors.designation && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="description" placeholder="Description" className="form-control" />
                                {errors.description && <span className="text-danger">This field is required</span>}
                            </div>
                            <br />
                            <div className="form-group text-left">
                                <button type="submit" className="btn btn-brand">Send</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Review;