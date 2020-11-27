import React from 'react';
import "../skills/skills.css"

const Skill = () => {
    return (
        <React.Fragment>
    <div className="title">
        <h2>MY SKILLS</h2>
    </div>
    <section id="skills" className="container-fluid">
        <div className="row stage">
            <div className="col-3 box">
                <i className="fab fa-html5 fa-5x icon-color" ></i>
            </div>
            <div className="col-3 box">
                <i className="fab fa-css3-alt fa-5x icon-color"></i>
            </div>
            <div className="col-3 box">
                <i className="fab fa-js-square fa-5x icon-color"></i>
                <p></p>
            </div>
            <div className="col-3 box">
                <i className="fab fa-react fa-5x icon-color"></i>
            </div>
        </div>
    </section>
        </React.Fragment>
      );
}

 
export default Skill;