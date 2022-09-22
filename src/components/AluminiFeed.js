import axios from 'axios';
import React, { useEffect, useState } from 'react';

import "./AluminiFedd.css";
import NavComponent from './NavComponent';

const AluminiFeed = () => {
    const alumini = JSON.parse(localStorage.getItem("jwt")).alumini.alumini;
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
        setAluminis(response.data);
    }

    useEffect(() => {
        fetchStudents();
    }, [])
    return (
        <div>
        <NavComponent />
        <div className="alumini-feed">
            <div className="aluminifeed-head">
            Search your co alumini
            </div>

            <div className="alumini-feed-search">
                <div className="alumini-profile">
                    <div><img className="profile-img" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="profile" /></div>
                    <p>{alumini.name}</p>
                    {
                        alumini.aluminiVerify ?
                        <p className="verify-auth">Verfied</p> :
                        <p className="verify-auth-no">Not Verfied</p>
                    }
                </div>
                <div className="alumini-search">
                    <div>
                    <input type="text" />
                    </div>
                    <div className="alumini-filters">
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

            <div className="alumini-feed-contents">
                <div className="alumini-porifle-details">
                    <div>
                    <p className="profileHead">Email: </p>
                    <p>{alumini.email}</p>
                    </div>
                    <div>
                    <p className="profileHead">Domain: </p>
                    <p>{alumini.domain}</p>
                    </div>
                    <div>
                    <p className="profileHead">Institute: </p>
                    <p>{alumini.institute}</p>
                    </div>
                    <div>
                    <p className="profileHead">State: </p>
                    <p>{alumini.state}</p>
                    </div>
                </div>
                <div className="alumini-porifle-feed">
                {
                    aluminis.filter(alu => alu._id !== alumini._id).map(alumini => (
                        <div key={alumini._id} className="alumini-profile-card">
                        <div>
                            <div>
                            <img className="profile-img" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="profile" />
                            </div>
                            <div>
                            {
                                alumini.aluminiVerify ?
                                <h3 className="verify-auth">Verfied</h3> :
                                <h3 className="verify-auth-no">Not Verfied</h3> 
                            }
                            </div>
                        </div>
                        <div className="alumini-profile-card-desc">
                        <h3>{alumini.name}</h3>
                        <div className="student-desc-info">
                        <div><p className="badge">INSTITUTE:</p><p>{alumini.institute}</p></div>
                        <div><p className="badge">STATE:</p><p>{alumini.state}</p></div>
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

export default AluminiFeed;
