import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "../Styles/main-page.css"



function Note(props) {
    return (

        //first page content
        <section id="information" className="section">
            <div className="mask-more">&nbsp;</div>
            <div className="main-wrap">
                <div className="text">
                    <ScrollAnimation animateIn="fadeIn" >
                        <h2>{props.heading}</h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" >
                        <p>
                            {props.firstParagraph}
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" >
                        <p>
                            {props.secondParagraph}
                        </p>
                    </ScrollAnimation>
                </div>
                <div className="side-image">
                    <img className="main-image" src={props.image} />
                </div>
            </div>
        </section>
    )
}

export default Note;