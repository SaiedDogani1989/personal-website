import React from 'react';
import Saeid from "../Image/Saeid.jpg"
import "../common/profile.css"


const Profile = () => {
    return (
        <div>
            <div className="title bg-light">
                <h2>Profile</h2>
            </div>
            <section id="profile" className="container-fluid">

                <div className="profile-content">
                    <img src={Saeid} alt="profile-pic" className="profile-img" />
                    <h2 className="profile-text">Hello I'am Saeid Dogani</h2>
                    <h4 className="profile-text-h4 ">Front-End Web Developer</h4>
                    <h5 className="profile-text-h5 ">I Live in Vancouver Canada</h5>
                </div>
            </section>
        </div>
    );
}

export default Profile;