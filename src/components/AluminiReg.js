import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Signup} from "../../src/helper/auth";

import "./AluminiReg.css";

const AluminiReg = () => {
    const [values, setValues] = useState({
        name: "",
        surname: "",
        dob: "",
        gender: "",
        company: "",
        state: "",
        city: "",
        mobile: "",
        email: "",
        linkedinId: "",
        institute: "",
        regNo: "",
        password: "",
        domain: "",
        role: 1,
        exp: "",
        error: "",
        success: false
    })

    const {
        name,surname,dob,gender,state,city,mobile,email,linkedinId,
        institute,regNo,password,domain,company,exp,error,success
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
            institute,domain,regNo,exp,password,company
        }, "signup/alumini")
        .then(data => {
            console.log(data)
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
                    institute: "",regNo: "",password: "",exp: "",domain: ""
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
                Account create successfully. Please <Link className="text-white" to="/login/alumini">CLICK HERE</Link> to login
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
        <div className="student-reg">
            {
                error ? errorMessage() : null
            }
            {
                success ? successMessage() : null
            }
            <div className="student-reg-head">
                <div>
                <Link className="free-link btn-primary" to="/login/alumini">BACK TO LOGIN</Link>
                </div>
                <div><h3>ALUMUNUS REGISTRATION</h3></div>
            </div>

            <div className="student-reg-photo">
                <input type="file" name="studentPic" id="studentPic" />
                <p>Upload your image</p>
                <hr className="hr-line" />
            </div>

            <div className="student-reg-block">
                <div>
                    <label htmlFor="name">NAME</label>
                    <input onChange={handleChange("name")} value={name} type="text" id="name" placeholder="" />
                </div>
                <div>
                    <label htmlFor="surname">SURNAME</label>
                    <input onChange={handleChange("surname")} value={surname} type="text" id="surname" placeholder="" />
                </div>
                <div>
                    <label htmlFor="dob">DATE OF BIRTH</label>
                    <input onChange={handleChange("dob")} value={dob} type="text" id="dob" placeholder="" />
                </div>
                <div>
                    <label htmlFor="gender">GENDER</label>
                    <select onChange={handleChange("gender")} name="" id="gender">
                        <option value="gender">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            <hr className="hr-line" />

            <div className="student-reg-block">
                <div>
                    <label htmlFor="state">STATE</label>
                    <input onChange={handleChange("state")} value={state} type="text" id="state" placeholder="" />
                </div>
                <div>
                    <select onChange={handleChange("city")} id="city" name="">
                        <option value="">CITY</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Gurgaon">Gurgaon</option>
                        <option value="Noida">Noida</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Kolkota">Kolkota</option>
                        <option value="Pune">Pune</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Jaipur">Jaipur</option>
                    </select>
                </div>
            </div>
            <hr className="hr-line" />

            <div className="student-reg-block">
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
                    <label htmlFor="institute">INSTITUTE</label>
                    <input onChange={handleChange("institute")} value={institute} type="text" id="institute" placeholder="" />
                </div>
                <div>
                    <label htmlFor="reg">REG NO</label>
                    <input onChange={handleChange("regNo")} value={regNo} type="text" id="reg" placeholder="" />
                </div>
                <div>
                    <select onChange={handleChange("domain")} id="domain" name="">
                        <option value="">WORK DOMAIN</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="Mobile Developer">Mobile Developer</option>                   
                        <option value="Cloud">Cloud</option>
                    </select>
                </div>
                <div>
                    <select onChange={handleChange("company")} id="company" name="">
                        <option value="">COMPANY</option>
                        <option value="Microsoft">Microsoft</option>
                        <option value="Google">Google</option>                   
                        <option value="Amazon">Amazon</option>
                        <option value="Meta">Meta</option>
                        <option value="Netflix">Netflix</option>
                        <option value="Accenture">Accenture</option>
                        <option value="Tcs">Tcs</option>
                        <option value="Capgemini">Capgemini</option>
                        <option value="Cognizant">Cognizant</option>
                        <option value="Infosys">Infosys</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="exp">YEAR OF EXP</label>
                    <input onChange={handleChange("exp")} value={exp} type="text" id="exp" placeholder="" />
                </div>
            </div>
            <hr className="hr-line" />

            <div className="student-reg-block">
                <div>
                    <label htmlFor="password">PASSWORD</label>
                    <input onChange={handleChange("password")} value={password} type="text" id="password" placeholder="" />
                </div>
            </div>

            <div className="student-reg-btn">
                <button onClick={onSubmit} className="btn-primary">REGISTER</button>
            </div>
        </div>
    );
};

export default AluminiReg;