import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import "./Login.css";
import NavComponent from './NavComponent';
import {Sigin, authenticate, isAuthenticated} from "../../src/helper/auth";

const MsdLogin = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        success: false,
        loading: false,
        didRedirect: false
    });

    const {email,password,error,loading,didRedirect,success} = values;
    const {user} = isAuthenticated();

    const handleChange = name => event => {
        setValues({
            ...values, error: false, [name]: event.target.value
        })
    }

    const onSubmit = () => {
        setValues({
            ...values, error: false, loading: true
        })
        Sigin({email, password}, "signin/msde")
        .then(data => {
            if(data?.error) {
                setValues({
                    ...values, error: data.error, success: false, loading: false, didRedirect: false
                })
            } else if(data?.err) {
                setValues({
                    ...values, error: data.err, success: false, loading: false, didRedirect: false
                })
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values, 
                        loading: false, success: true, error: "", didRedirect: true
                    })  
                })    
                performRedirect();       
            }
        })
        .catch(err => {
            setValues({
                ...values, error: err, loading: false, didRedirect: false, success: false
            })
            console.log("ERR SIGNIN: ", err);
        })
    }

    const performRedirect = () => {
        window.location.href = "http://localhost:3000/feed/msde";
    }

    const successMessage = () => {
        return (
            <div className="success-message">
                <div>
                Please wait. Logging in...
                </div>
            </div>
        )
    }

    const errorMessage = (error) => {
        return (
            <div className="error-message">
                <div>{error}</div>
            </div>
        )
    }

    return (
        <div className="student-login-page">
            <NavComponent />
            {
                error ? errorMessage(error) : null
            }
            {
                success ? successMessage() : null
            }
            <div className="student-login-page-contents">
            <div className="student-login-content">
                <div>
                <h3>ALUMINI CONNECT LOGIN</h3>
                </div>
                <div>
                <img className="log-img" src="https://i.ibb.co/d0hmxDf/20944201-removebg-preview.png" alt="" />
                </div>
                <p>Login as student to gain access to registered Alumini</p>
            </div>

            <div className="student-login-forms">
                <div className="student-login-head">
                Enter your Alumini Connect login credentials
                </div>
                <div className="input-form-group">
                    <label htmlFor="email">Email</label>
                    <input autoComplete="off" onChange={handleChange("email")} value={email} type="email" id="email" />
                </div>
                <div className="input-form-group">
                    <label htmlFor="password">Password</label>
                    <input autoComplete="off" onChange={handleChange("password")} value={password} type="password" id="password" />
                </div>
                <div className="login-btns">
                <div className="login-btn-wrap">
                <button onClick={onSubmit} className="login-btn">MSDE LOGIN</button>
                <div className="sign-up-link">
                or <Link className="signup" to="/register/msde">MSDE SIGNUP</Link>
                </div>
                </div>

                </div>
            </div>
            </div>
        </div>
    );
};

export default MsdLogin;
