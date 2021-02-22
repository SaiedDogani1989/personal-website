import React from 'react';
import Footer from '../Footer';
import Html from "./img/html.jpg"
import JavaScript from "./img/javaScript.jpg"
import Css from "./img/css3.jpg"
import CERTIFICATE from "./img/CERTIFICATE.jpeg"
import "./style/aboutMe.css"
import Navbar from '../NavBar';
import Course from "./Course";
import Experience from "./WorkExperience";
import Skill from './Skills';
import Personality from './Personality';
import { Zoom } from '@material-ui/core';

const AboutMe = () => {
    return (
        <React.Fragment>
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-lg-6">
                         <Personality />
                        <Skill />
                        <Course />
                        {/* <Experience /> */}
                    </div>
                    <div className="col-lg-6  images">
                        <div className="image-center">
                            <img src={CERTIFICATE} alt="CERTIFICATE" className="certificate-img"></img>
                        </div>
                        <div className="image-center">
                            <img src={Html} alt="html" className="certificate-img" />
                        </div>
                        <div className="image-center">
                            <img src={JavaScript} alt="html" className="certificate-img" />
                        </div>
                        <div className="image-center">
                            <img src={Css} alt="css" className="certificate-img"></img>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export default AboutMe;