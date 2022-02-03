import React, { useContext, useState } from 'react';
import myContext from '../../Context/Mycontext';
import Admin_nav from '../Admin_nav';
import "../../css/Enquiry.css";
import Login from '../Login';

const Admin_profile = () => {
    const a = useContext(myContext);
    const [myname, setmyname] = useState("shubham")
    const Changefullname = (e) => {
        setmyname(e.target.value)
    }
    const subm = (e) => {
        e.preventDefault();
        console.log(a.FullName);
        a.nameupdate(myname);
    }

    if (a.state === true) {
        return (
            <>
                <Admin_nav />
                <div className="container">
                    <div className="title">My information</div>
                    <div className="content">
                        <form action="#">
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Full Name</span>
                                    <input type="text" onChange={Changefullname} placeholder="Enter your name" defaultValue={a.FullName.name} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Role</span>
                                    <input type="text" placeholder="Enter your number" />
                                </div>
                                <div className="input-box">
                                    <span className="details">about skill</span>
                                    <input type="text" placeholder="Enter your email" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Age</span>
                                    <input type="text" placeholder="Course" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Freelance</span>
                                    <input type="Date" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Skill</span>
                                    <input type="text" placeholder="Address" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input type="text" placeholder="Course" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Address</span>
                                    <input type="text" placeholder="Address" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Language</span>
                                    <input type="text" placeholder="Address" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Experience</span>
                                    <input type="text" placeholder="Address" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Year of Experience</span>
                                    <input type="text" placeholder="Address" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Happy clients</span>
                                    <input type="text" placeholder="Address" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Project completed</span>
                                    <input type="text" placeholder="Address" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Award won</span>
                                    <input type="text" placeholder="Address" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Number</span>
                                    <input type="text" placeholder="Address" />
                                </div>
                            </div>
                                <div className="button">
                                    <input type="submit" value="Register" onClick={subm} />
                                </div>
                        </form>
                    </div>
                </div>

            </>
        );
    }
    else {
        return (
            <Login />
        )
    }
};

export default Admin_profile;
