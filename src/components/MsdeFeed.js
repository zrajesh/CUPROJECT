import axios from 'axios';
import React, { useEffect, useState } from 'react';

import "./MsdeFeed.css";
import NavComponent from './NavComponent';

const MsdeFeed = () => {
    const [aluminis, setAluminis] = useState([
        {
            _id: "",
            name: "",
            surname: "",
            dob: "",
            gender: "",
            state: "",
            company: "",
            city: "",
            email: "",
            mobile: "",
            linkedinId: "",
            institute: "",
            regNo: "",
            domain: "",
            exp: "",
            aluminiVerify: ""
        }
    ]);

    const aluminiUrl = "http://localhost:8000/api/aluminis";
    const updateAluminiUrl = "http://localhost:8000/api/alumini/update";
    const deleteAluminiUrl = "http://localhost:8000/api/alumini/delete";

    const clearFilter = () => {
        window.location.reload();
    }

    const fitlerAluminis =   async (url, id) => {
        let data = document.querySelector(`#${id}`).value;
        console.log(data);
        const response = await axios
            .get(`${aluminiUrl}/${url}/${data}`)
            .catch(err => console.log("ERROR: ", err))
        let msdeRegNo = JSON.parse(localStorage.getItem("jwt")).msde.msde.regNo;    
        setAluminis(response.data.filter((data) => data.regNo === msdeRegNo));
    }

    const fetchStudents =   async (regNo) => {
        const response = await axios
            .get(`${aluminiUrl}/${regNo}`)
            .catch(err => console.log("ERROR: ", err))     
        setAluminis(response.data);
    }
    const updateAlumini =   async (id) => {
        const response = await axios
            .put(updateAluminiUrl, {
                _id: id,
                aluminiVerify: true
            })
            .catch(err => console.log("ERROR: ", err))
            window.location.reload();
    }

    const deleteAlumini =   async (id) => {
        console.log("ID: ", id);
        const response = await axios
            .delete(`${deleteAluminiUrl}/${id}`)
            .catch(err => console.log("ERROR: ", err))
            window.location.reload();
    }

    useEffect(() => {
        fetchStudents(JSON.parse(localStorage.getItem("jwt")).msde.msde.regNo);
    }, [])

    return (
        <div>
        <NavComponent />
        <div className="msde-feed">
            <div className="msdefeed-head">
            Search for alumini
            </div>

            <div className="msde-feed-search">
                <div className="msde-search">
                    <div>
                    <input type="text" />
                    </div>
                    <div className="msde-filters">
                    <div>
                        <select id="alumAuth" onChange={() => fitlerAluminis("verify", "alumAuth")} name="">
                            <option value="">Alumini Authenticate</option>
                            <option value="true">Verified</option>
                            <option value="false">Not Verified</option>
                        </select>
                        </div>

                        <div>
                        <select id="genderSelect" onChange={() => fitlerAluminis("gen", "genderSelect")} name="">
                            <option value="">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        </div>

                        <div>
                        <select id="domainSelect" onChange={() => fitlerAluminis("work", "domainSelect")} name="" >
                            <option value="">Work Domain</option>
                            <option value="Web Developer">Web Developer</option>
                            <option value="Mobile Developer">Mobile Developer</option>
                            <option value="Cloud">Cloud</option>
                        </select>
                        </div>

                        <div>
                    <select id="city" onChange={() => fitlerAluminis("cit", "city")} name="">
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

                <div>
                    <select id="company" onChange={() => fitlerAluminis("com", "company")} name="">
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
                            <button onClick={clearFilter} className="btn-primary">Clear</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="msde-feed-contents">
                <div className="msde-porifle-feed">
                {
                    aluminis.map(alumini => (
                        <div key={alumini._id} className="msde-profile-card">
                        <div>
                            <div>
                            <img className="profile-img" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="profile" />
                            </div>
                            {
                                alumini.aluminiVerify === false ?
                                <div><button onClick={() => updateAlumini(alumini._id)} className="btn-primary btn-top">Verify Alumini</button></div> :
                                null
                            }
                            <div><button onClick={() => deleteAlumini(alumini._id)} className="btn-danger btn-top">Delete Alumini</button></div>
                        </div>
                        <div className="msde-profile-card-desc">
                        <h3>{alumini.name}</h3>
                        <div className="msde-desc-info">                       
                        <div><p className="badge">INSTITUTE:</p><p>{alumini.institute}</p></div>
                        <div><p className="badge">STATE:</p><p>{alumini.state}</p></div>
                        <div><p className="badge">EMAIL:</p><p>{alumini.email}</p></div>
                        <div><p className="badge">WORK DOMAIN:</p><p>{alumini.domain}</p></div>
                        <div><p className="badge">COMPANY:</p><p>{alumini.company}</p></div>
                        <div><p className="badge">EXPERIENCE:</p><p>{alumini.exp}</p></div>
                        </div>
                        </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
        </div>
    );
};

export default MsdeFeed;
