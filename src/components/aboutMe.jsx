import React, { Component } from 'react';
import Footer from '../common/footer/footer';
import Html from "../Image/html.jpg"
import JavaScript from "../Image/javaScript.jpg"
import Css from "../Image/css3.jpg"
import Php from "../Image/php.jpg"
import "../css/aboutMe.css"
import Navbar from './navbar';

class AboutMe extends Component {

    render() {
        return (

            <React.Fragment>
                <Navbar />
                <section id="about-me" className="container-fluid bg-light mt-3">
                    <div className="row">
                        <div className="col-lg-5 content">
                            <h3 className="mt-3">About me and my knowledge</h3>
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

                            <h3 className="mt-3">About my personality</h3>
                            <p> I like doing group works and helping teammates. I am ambitious
                            and eager to develop my knowledge and learn new skills,
                            I’m passionate about coding and creating.</p>

                            <h3 className="mt-3">My skills and abilities</h3>
                            <ul>
                                <li>HTML : Proficient</li>
                                <li>CSS3 : Proficient</li>
                                <li>Bootstrap : Proficient</li>
                                <li>JavaScript : Upper-Intermediate</li>
                                <li>Jquery : Upper-Intermediate</li>
                                <li>React.js : Intermediate</li>
                                <li>PHP : Beginner</li>
                            </ul>
                        </div>
                        <div className="col-lg-7 mt-3">
                            <img src={Html} alt="html" className="certificate-img" />
                            <img src={JavaScript} alt="html" className="certificate-img" />
                            <img src={Css} alt="css" className="certificate-img"></img>
                            <img src={Php} alt="php" className="certificate-img"></img>
                        </div>
                    </div>
                </section>
                <section className="container-fluid bg-light">
                    <div className="col-12 content">
                        <h3>Related Coursework</h3>
                        <ul>
                            <li>The Complete 2020 Web Development Bootcamp | 53.5 Hours | Dr. Angela Yu| Udemy | 53.5 Hours |Fall 2020</li>
                            <li>HTML, CSS, JavaScript | 6 Hours | John Hopkins University| Yaakov Chaikin| Coursera | Fall 2020</li>
                            <li>React.js | 12 Hours | Mosh Hamedani| CodeWithMosh | Summer 2020</li>
                            <li>JavaScript| 6.5 Hours| Mosh Hamedani| CodeWithMosh| Spring 2020</li>
                            <li>JavaScript| 14.5 Hours| Iman Madaeni| Toplearn| Winter 2020</li>
                            <li>Bootstrap 4| 14 Hours| Iman Madaeni| Toplearn|Winter 2020</li>
                            <li>HTML, CSS| 19.5 Hours| Iman Madaeni| Toplearn| Fall 2019</li>
                        </ul>
                    </div>
                    <div className="col-12 content mt-3">
                        <h3>Work experience</h3>
                        <ul>
                            <li className="font-weight-bold">Real Estate Developer| Family Business| 2014-2020| Mashhad, Iran</li>
                            <p>Investor, builder and designer of residential apartments</p>
                            <li className="font-weight-bold">Contract Manager and Part-Owner| Family Business| Form-Sazeyeh-Deniz Construction Company| 2012-2014| Mashhad, Iran</li>
                            <p>Consulted and made contracts with the customers</p>
                        </ul>
                    </div>
                </section>
                {/* footer */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default AboutMe;