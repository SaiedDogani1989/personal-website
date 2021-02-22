import React from 'react';
import CERTIFICATE from "./img/CERTIFICATE.jpeg";
import Html from "./img/html.jpg";



function Personality() {
    return (
        <div className="contentt">
            <h3>About Me</h3>
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
            <h3 className="mt-5">My Personality & My Goals </h3>
            <p className="justify-paragraph">I have warm personality and I am energetic and friendly and mature
            I like doing group works and helping teammates, however I become nervous in some situation.
            I am eager to develop my knowledge and learn new skills and expand my knowledge, I am passionate about coding
            and creating. and because of my eight year experience in my family business in construction I think
     I have good taste in designing and user experience</p>
            <div className="image-hide">
                <img src={Html} alt="html" className="certificate-img" />
            </div>
        </div>
    )
}
export default Personality;