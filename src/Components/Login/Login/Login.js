import React, { useContext } from 'react';
import logo from '../../../images/logos/logo.png';
import googleLogo from '../../../images/logos/g-logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import firebaseConfig from './firebase.config';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email } = result.user;
                const user = {
                    isSignedIn: true,
                    name: displayName,
                    email: email
                }
                setLoggedInUser(user);
                history.replace(from);
            }).catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    

    const handleGoogleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const user = {
                    isSignedIn: false,
                    name: '',
                    email: ''
                }
                setLoggedInUser(user);
            }).catch(err => {

            })
    }
    return (
        <div className="login-page container text-center mt-5">
            <div className="text-center mb-5 mt-5">
                <img src={logo} width="200px" alt="" />
            </div>

            <div className="text-center d-flex align-item-center justify-content-center">
                <div className="card w-50">
                    <div className="card-body p-5">
                        <h3>Login With</h3><br />
                        {
                            loggedInUser.isSignedIn ? <button style={{ borderRadius: '30px' }} type="button" className="btn btn-primary btn-lg btn-block" onClick={handleGoogleSignOut} >
                                <img src={googleLogo} alt="" width="50px" />
                            Sign-Out from Google
                        </button> : <button style={{ borderRadius: '30px' }} type="button" className="btn btn-light btn-lg btn-block" onClick={handleGoogleSignIn} >
                                    <img src={googleLogo} alt="" width="50px" />
                            Continue with Google
                        </button>
                        }

                        <br />
                        <p>Don't Have an account? <Link to="#">Create an account</Link> </p>
                        <br/>
                        <button type="button" className="btn btn-light"><Link to="/">Back to Home</Link></button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;