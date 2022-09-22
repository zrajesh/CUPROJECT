import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavComponent from './NavComponent';

import "./StdentFeed.css";

const StdentFeed = () => {

    const [aluminis, setAluminis] = useState([
        {
            _id: "",
            name: "",
            surname: "",
            dob: "",
            gender: "",
            state: "",
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

    const user = JSON.parse(localStorage.getItem("jwt")).user.user;

    const aluminiUrl = "http://localhost:8000/api/aluminis";

    const clearFilter = () => {
        window.location.reload();
    }

    const fitlerAluminis =   async (url, id) => {
        let data = document.querySelector(`#${id}`).value;
        console.log(data);
        const response = await axios
            .get(`${aluminiUrl}/${url}/${data}`)
            .catch(err => console.log("ERROR: ", err))  
        setAluminis(response.data);
    }

    const fetchStudents =   async () => {
        const response = await axios
            .get(aluminiUrl)
            .catch(err => console.log("ERROR: ", err))
        setAluminis(response.data)
    }

    useEffect(() => {
        fetchStudents();
    }, [])
    return (
        <div>
        <NavComponent />
        <div className="student-feed">
            <div className="studentfeed-head">
            Search your alumini
            </div>

            <div className="student-feed-search">
                <div className="student-profile">
                    <div><img className="profile-img" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="profile" /></div>
                    <p className="profileHead">{user.name}</p>
                </div>
                <div className="student-search">
                    <div>
                    <input type="text" />
                    </div>
                    <div className="student-filters">
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
                        <select id="domainSelect" onChange={() => fitlerAluminis("work", "domainSelect")} name="">
                            <option value="">Work Domain</option>
                            <option value="Web Developer">Web Developer</option>
                            <option value="Mobile Developer">Mobile Developer</option>                   
                            <option value="Cloud">Cloud</option>
                        </select>
                        </div>

                        <div>
                            <button onClick={clearFilter} className="btn-primary">Clear</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="student-feed-contents">
                <div className="student-porifle-details">
                    <div>
                    <p className="profileHead">Email: </p>
                    <p>{user.email}</p>
                    </div>
                    <div>
                    <p className="profileHead">Institute: </p>
                    <p>{user.institute}</p>
                    </div>
                    <div>
                    <p className="profileHead">Reg No: </p>
                    <p>{user.regNo}</p>
                    </div>
                    <div>
                    <p className="profileHead">State: </p>
                    <p>{user.state}</p>
                    </div>
                </div>
                <div className="student-porifle-feed">
                {
                    aluminis.map(alumini => (
                        <div key={alumini._id} className="student-profile-card">
                        <div>
                            <div>
                            <img className="profile-img" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="profile" />
                            </div>
                            <div>
                            {
                                alumini.aluminiVerify ?
                                <h3 className="student-auth">Verfied</h3> :
                                <h3 className="student-auth-no">Not Verfied</h3>
                            }
                            </div>
                        </div>
                        <div className="student-profile-card-desc">
                        <h3>{alumini.name} {alumini.surname}</h3>
                        <div className="student-desc-info">
                        <div><p className="badge">STATE:</p><p>{alumini.state}</p></div>
                        <div><p className="badge">INSTITUTE:</p><p>{alumini.institute}</p></div>
                        <div><p className="badge">REG NO:</p><p>{alumini.regNo}</p></div>
                        <div><p className="badge">EMAIL:</p><p>{alumini.email}</p></div>
                        <div><p className="badge">WORK DOMAIN:</p><p>{alumini.domain}</p></div>
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

export default StdentFeed;
