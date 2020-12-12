import React from 'react';
import Footer from './footer';
import Profile from '../common/profile';
import "../css/homeStyle.css"
import Navbar from './navbar';
const HomePage = () => {
    return (
        <React.Fragment>
            <Navbar />
            <section id="header" className="container-fluid">
                <div className=" col-lg-12 col-md-12 headerContent ele">
                    <h2>You Affect The World By What You Browse.</h2>
                    <h6>Tim Berners-Lee</h6>
                </div>
            </section>
            <Profile />
            <Footer />
        </React.Fragment>

    )
}

export default HomePage;