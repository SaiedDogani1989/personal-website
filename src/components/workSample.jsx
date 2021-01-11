import React from 'react';
import Footer from './footer';
import Tindog from "../Image/tindog.jpg";
import WorkOut from "../Image/WorkOut.jpg"
import Html from "../Image/html-sample.jpg"
import Oak from "../Image/Oak.jpg"
import "../css/workSample.css"
import Navbar from './navbar';


const WorkSample = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="title bg-light">
        <h2>Work Sample</h2>
      </div>
      <section className="bg-dark" id="workSample">
        <div className="container-fluid text-center">
          <div id="testimonial-carousel" className="carousel m-5" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="skill-img" src={Html} alt="html" />

              </div>
              <div className="carousel-item">
                <img className="skill-img" src={Oak} alt="oak" />

              </div>
              <div className="carousel-item">
                <img className="skill-img" src={WorkOut} alt="workOut" />
              </div>
              <div className="carousel-item">
                <img className="skill-img" src={Tindog} alt="tindog" />
              </div>

            </div>
            <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon bg"></span>
            </a>
            <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon bg"></span>
            </a>
          </div>
        </div>
      </section>
      <div className="container-fluid bg-light workSample-url">
        <div className="row">
          <div className="col-6 center-link">
            <ul>
              <li><a className="workSample-link" href="https://saieddogani1989.github.io/work-samples/drum/" target="_blank">Drum</a></li>
              <li><a className="workSample-link" href="https://saieddogani1989.github.io/work-samples/tinDog/" target="_blank">Tindog</a></li>
            </ul>
          </div>
          <div className="col-6 center-link">
            <ul>
              <li><a className="workSample-link" href="https://saieddogani1989.github.io/work-samples/dicee/" target="_blank">Dicee</a></li>
              <li><a className="workSample-link" href="https://shrouded-dusk-06186.herokuapp.com/" target="_blank">Sport News</a></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default WorkSample;