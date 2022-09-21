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

    const fetchStudents =   async () => {
        const response = await axios
            .get(aluminiUrl)
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
        fetchStudents();
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
                        <select name="" id="">
                            <option value="">Year</option>
                            <option value="">2022</option>
                            <option value="">2021</option>
                            <option value="">2020</option>
                        </select>
                        </div>

                        <div>
                        <select name="" id="">
                            <option value="">Gender</option>
                            <option value="">Male</option>
                            <option value="">Female</option>
                        </select>
                        </div>

                        <div>
                        <select name="" id="">
                            <option value="">Work Domain</option>
                            <option value="">Web Development</option>
                            <option value="">Android Development</option>
                            <option value="">Machine Learning</option>
                            <option value="">Cloud and Devops</option>
                        </select>
                        </div>

                        <div>
                            <button className="btn-primary">Clear</button>
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
