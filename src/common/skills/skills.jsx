import React from 'react';
import "../skills/skills.css"

const Skill = () => {
    return (
        <React.Fragment>
    <div class="title">
        <h2>MY SKILLS</h2>
    </div>
    <section id="skills" class="container-fluid">
        <div class="row stage">
            <div class="col-3 box">
                <i class="fab fa-html5 fa-5x icon-color" ></i>
            </div>
            <div class="col-3 box">
                <i class="fab fa-css3-alt fa-5x icon-color"></i>
            </div>
            <div class="col-3 box">
                <i class="fab fa-js-square fa-5x icon-color"></i>
                <p></p>
            </div>
            <div class="col-3 box">
                <i class="fab fa-react fa-5x icon-color"></i>
            </div>
        </div>
    </section>
        </React.Fragment>
      );
}

 
export default Skill;