import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import SideBar from '../../Shared/SideBar/SideBar';

const AddAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        fetch('https://secret-eyrie-95562.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {

                    alert('NEW ADMIN email added successfully.');
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
                        <h2 className="text-left col-md-6">Add ADMIN (ADMIN)</h2>
                        <h3 className="text-right col-md-6">{loggedInUser.name}</h3>
                    </div> <br />
                    <div style={{ backgroundColor: '#f4f7fc' }}>
                        <form style={{ backgroundColor: '#f4f7fc' }} className="p-5 card " onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="email"  ref={register({ required: true })} name="email" placeholder="john@gmail.com" className="form-control" />
                                {errors.email && <span className="text-danger">This field is required</span>}
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

export default AddAdmin;