import React, { Component } from 'react';
import Footer from '../common/footer/footer';
import Html from "./html.jpg"
import JavaScript from "./javaScript.jpg"
import "../css/aboutMe.css"
import Navbar from './navbar';

class AboutMe extends Component {

    render() {
        return (

            <React.Fragment>
                <Navbar />
                <section id="about-me" class="container-fluid bg-light">
                    <div class="row">
                        <div class="col-lg-5 content">
                            <h3 className="mt-3">ABOUT ME</h3>
                            <p>I am an ambitious Frontend Web Developer and I am 31 years old. My carrier started
                            from December 2019 , I have bachelor degree in telecommunication and associate's degree in
                            ICT, at first I started to learn HTML and CSS and great my first web page and I call that
                            page Solo Learn because I started to learn with Solo Learn application.<br />
                            After that I started to learn javaScript and add some javaScript codes to my Solo Learn page.
                            After these first steps I attend to some online courses such as native courses and
                            international courses and learnt these 3 fundamental courses in deep specially
                            javaScript. Then I started to learn React.js and pass online react courses in Code With Mosh Website,
                            I kept learning and started an online BootCamp course in Udemy. This BootCamp really helps me
                            to understand deeply about Frontend and Backend. However I am focusing on Frontend and the fist impression
                            on client because in my point of view it is so important and also user experience and their emotions
                            about using a website and find out what their problems are and solve them is so important too.</p>
                            <h3>MY SKILLS</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                                <li>Jquery</li>
                                <li>React.js</li>
                            </ul>
                        </div>
                        <div className="col-lg-7 mt-3">
                            <img src={Html} alt="html" className="certificate-img" />
                            <img src={JavaScript} alt="html" className="certificate-img" />
                        </div>
                    </div>
                </section>
                {/* footer */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default AboutMe;