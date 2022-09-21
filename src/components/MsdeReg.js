import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Signup} from "../../src/helper/auth";

import "./MsdeReg.css";

const MsdeReg = () => {
    const [values, setValues] = useState({
        name: "",
        surname: "",
        dob: "05/09/1999",
        gender: "msde",
        state: "",
        city: "",
        mobile: "",
        email: "",
        linkedinId: "",
        institute: "",
        regNo: "",
        password: "",
        domain: "",
        about: "",
        role: 2,
        website: "",
        exp: "",
        error: "",
        success: false
    })

    const {
        name,surname,dob,gender,state,city,mobile,email,linkedinId,
        institute,regNo,password,domain,exp,about,error,website,success
    } = values;

    const handleChange = name => event => {
        setValues({
            ...values, error: false, [name]: event.target.value
        })
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({
            ...values, error: false
        })
        Signup({
            name,surname,dob,gender,state,city,mobile,email,linkedinId,
            institute,domain,regNo,exp,password,about,website
        }, "signup/msde")
        .then(data => {
            if(data?.error) {
                setValues({
                    ...values, error: data.error, success: false
                })
                alert()
            } else if(data?.err) {
                setValues({
                    ...values, error: data.err, success: false
                })
            } else {
                setValues({
                    ...values, success: true,
                    name: "",surname: "",dob: "",gender: "",state: "",city: "",mobile: "",email: "",linkedinId: "",
                    institute: "",regNo: "",password: "",exp: "",domain: "",about: "",website: ""
                })              
            }
        })
        .catch(err => {
            setValues({
                ...values, error: err, success: false
            })
            console.log("ERR SIGNUP: ", err)
        })
    }

    const successMessage = () => {
        return (
            <div className="success-message">
                <div>
                Account create successfully. Please <Link className="text-white" to="/login/msde">CLICK HERE</Link> to login
                </div>
            </div>
        )
    }

    const errorMessage = () => {
        return (
            <div className="error-message">
                <div>Please fill all the Fields Correctly</div>
            </div>
        )
    }
    return (
        <div className="msde-reg">
            {
                error ? errorMessage() : null
            }
            {
                success ? successMessage() : null
            }
            <div className="msde-reg-head">
                <div>
                <Link className="free-link btn-primary" to="/login/msde">BACK TO LOGIN</Link>
                </div>
                <div><h3>MSDE REGISTRATION</h3></div>
            </div>

            <div className="msde-reg-photo">
                <input type="file" name="msdePic" id="msdePic" />
                <p>Upload your image</p>
                <hr className="hr-line" />
            </div>

            <div className="msde-reg-block">
                <div>
                    <label htmlFor="name">NAME OF INSTITUTE</label>
                    <input onChange={handleChange("name")} value={name} type="text" id="name" placeholder="" />
                </div>
                <div>
                    <label htmlFor="regNo">MSDE REG NO</label>
                    <input onChange={handleChange("regNo")} value={regNo} type="number" id="regNo" placeholder="" />
                </div>
            </div>
            <hr className="hr-line" />

            <div className="msde-reg-block">
                <div>
                    <label htmlFor="state">State</label>
                    <input onChange={handleChange("state")} value={state} type="text" id="state" placeholder="" />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input onChange={handleChange("city")} value={city} type="text" id="city" placeholder="" />
                </div>
                <div>
                    <label htmlFor="about">About MSDE</label>
                    <textarea onChange={handleChange("about")} value={about} type="text" id="about" placeholder="" />
                </div>
            </div>
            <hr className="hr-line" />

            <div className="msde-reg-block">
                <div>
                    <label htmlFor="mobile">MOBILE</label>
                    <input onChange={handleChange("mobile")} value={mobile} type="text" id="mobile" placeholder="" />
                </div>
                <div>
                    <label htmlFor="email">EMAIL</label>
                    <input onChange={handleChange("email")} value={email} type="text" id="email" placeholder="" />
                </div>
                <div>
                    <label htmlFor="linkedin">LINKEDIN ID</label>
                    <input onChange={handleChange("linkedinId")} value={linkedinId} type="text" id="linkedin" placeholder="" />
                </div>
                <div>
                    <label htmlFor="website">WEBSITE</label>
                    <input onChange={handleChange("website")} value={website} type="text" id="website" placeholder="" />
                </div>
            </div>
            <hr className="hr-line" />

            <div className="msde-reg-block">
                <div>
                    <label htmlFor="password">PASSWORD</label>
                    <input onChange={handleChange("password")} value={password} type="text" id="password" placeholder="" />
                </div>
            </div>

            <div className="msde-reg-btn">
                <button onClick={onSubmit} className="btn-primary">REGISTER</button>
            </div>
        </div>
    );
};

export default MsdeReg;
