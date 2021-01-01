import React, { Component } from 'react';
import Footer from './footer';
import Html from "../Image/html.jpg"
import JavaScript from "../Image/javaScript.jpg"
import Css from "../Image/css3.jpg"
import CERTIFICATE from "../Image/CERTIFICATE.jpeg"
import "../css/aboutMe.css"
import Navbar from './navbar';

class AboutMe extends Component {

    render() {
        return (

            <React.Fragment>
                <Navbar />
                <section className="container-fluid bg-light mt-3">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="content">
                                <h3 className="mt-3">About me</h3>
                                <p className="justify-paragraph">I am an ambitious Frontend Web Developer and I am 31 years old. My carrier started
                                from December 2019 , I have bachelor degree in telecommunication and associate's degree in
                                ICT, at first I started to learn HTML and CSS and great my first web page and I call that
                            page Solo Learn because I started to learn with Solo Learn application.<br />
                            After that I started to learn javaScript and add some javaScript codes to my Solo Learn page.
                            After these first steps I attend to some online courses such as native courses and
                            international courses and learnt these 3 fundamental courses in deep specially
                            javaScript. Then I started to learn React.js and pass online react courses in Code With Mosh Website,
                            I kept learning and started an online BootCamp course in Udemy. This BootCamp really helps me
                            to understand deeply about Frontend and Backend and learn to work with database such as Mongoose and MySQL,
                            so I created a blog post website(Sport News) with a hidden component(/compose) to add news to the website
                            with a simple style and connected to my own database that I created with mongoose. However I am focusing on
                            Frontend and the first impression on client because in my point of view it is so important and also user
                            experience and their emotions about using a website and find out what their problems are and solve them
                            is so important too.</p>
                             <div className="image-hide">
                                <img src={CERTIFICATE} alt="CERTIFICATE" className="certificate-img"></img>
                            </div>
                                <h3 className="mt-3">About my personality</h3>
                                <p className="justify-paragraph">I have warm personality and I like doing group works and helping teammates, however I can work on my own.
                                I am eager to develop my knowledge and learn new skills and expand my knowledge, I am passionate about coding
                                and creating. and because of my eight year experience in my family business in construction I think
                            I have good taste in designing and user experience</p>
                            <div className="image-hide">
                                <img src={Html} alt="html" className="certificate-img" />
                            </div>
                            </div>
                            <div className="mt-3">

                            </div>
                            <div>
                                <h3 className="mt-3">My skills and abilities</h3>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Bootstrap</li>
                                    <li>JavaScript</li>
                                    <li>Jquery</li>
                                    <li>React.js</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>SQL and NO SQL</li>
                                    <li>Git</li>
                                </ul>
                                <div className="image-hide">
                                <img src={Css} alt="css" className="certificate-img"></img>
                            </div>
                            </div>
                            <div className="content">
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
                                <div className="image-hide">
                                <img src={JavaScript} alt="html" className="certificate-img" />
                            </div>
                            </div>
                            <div className="content mt-3">
                                <h3>Work experience</h3>
                                <ul>
                                    <li className="font-weight-bold">Real Estate Developer| Family Business| 2014-2020| Mashhad, Iran</li>
                                    <p>Investor, builder and designer of residential apartments</p>
                                    <li className="font-weight-bold">Contract Manager and Part-Owner| Family Business| Form-Sazeyeh-Deniz Construction Company| 2012-2014| Mashhad, Iran</li>
                                    <p>Consulted and made contracts with the customers</p>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6  mt-3">
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
                </section>
                {/* footer */}
                <Footer />
            </React.Fragment >
        );
    }
}

export default AboutMe;