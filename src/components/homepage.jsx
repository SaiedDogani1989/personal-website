import React from 'react';
import Footer from '../common/footer/footer';
import Profile from '../common/profile';
// import Skill from '../common/skills/skills';
import "../css/homeStyle.css"
const HomePage = () => {
    return (
        <React.Fragment>
            <section id="header" className="container-fluid">
                <div className=" col-lg-12 col-md-12  headerContent ele">
                    <h2>You Affect The World By What You Browse.</h2>
                    <h6>Tim Berners-Lee</h6>
                </div>
            </section>
            {/* // profile */}
            <Profile />
            {/* footer */}
            <Footer />
        </React.Fragment>

    )
}

export default HomePage;