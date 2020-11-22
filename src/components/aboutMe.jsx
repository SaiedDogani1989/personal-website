import React from 'react';
import Footer from '../common/footer/footer';
import Html from "./html.jpg"
import JavaScript from "./javaScript.jpg"

import "../css/aboutMe.css"


const AboutMe = () => {
    return (
        <React.Fragment>
            <section id="about-me" class="container-fluid bg-light">
                <div class="row">
                    <div class="col-lg-5 content">
                        <p>
                            I am an ambitious frontend developer and I am eager to learn, my career started in
                            2019 ,
                            at first I started to learn HTML and CSS and great my first web page and I call that
                            pag
                            e Solo Learn because I started to learn with Solo Learn application and after that
                            I started to learn javaScript and add some javaScript codes to my Solo Learn page.
                            After these first steps I attend to some online courses such as native courses and
                            international courses and learnt these 3 fundamental courses in deep specially
                    javaScript</p>

                        <p>
                            Then I started to learn React.js and pass online react courses in Code With Mosh Website,
                            after 6 months I started to work in ... company as an intern and along that
                    I kept learning and started an online BootCamp course in Udemy.<br />

                        </p>
                    </div>
                    <div className="col-lg-7">
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

export default AboutMe;