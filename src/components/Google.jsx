import React from 'react';
import Google from "../Image/google-search.png"
import ScrollAnimation from 'react-animate-on-scroll';
import "../Styles/content.css"



function Content() {
    return (
        <section id="more-life" className="section">
            <video autoPlay muted className="video">
                <source src="https://video-public.canva.com/VAD4zHWIZ-c/v/d54506ff03.mp4" />
                <source src="https://video-public.canva.com/VAD4zHWIZ-c/v/d54506ff03.mp4" />
            </video>
            <div className="mask-more">&nbsp;</div>
            <div className="main-wrap">
                <div className="text">
                    <ScrollAnimation animateIn="fadeIn">
                        <h2>Google</h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn">
                        <p>Google was founded in September 1998 by Larry Page and Sergey Brin,
                        which has become the most used web-based search engine.</p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn">
                        <p>Larry Page and Sergey Brin, developed a search algorithm at first known as "BackRub" in 1996,
                        with the help of Scott Hassan and Alan Steremberg.
                        The company launched Google News in 2002, Gmail in 2004, Google Maps in 2005,
                        Google Chrome in 2008. The name Google is a misspelling of Googol, the number 1 followed by 100 zeros,
                        which was picked to signify that the search engine was intended to provide large quantities of information.
                        </p>
                    </ScrollAnimation>
                </div>
                <div className="side-image">
                    <img className="main-image" src={Google} />
                </div>
            </div>
        </section>
    )
}

export default Content;