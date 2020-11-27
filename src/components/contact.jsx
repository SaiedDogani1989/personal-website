import React, { } from 'react';
import Joi from 'joi-browser'
import "../css/contact.css"
import Form from './contact/form';
import Footer from '../common/footer/footer';

class Contact extends Form {
    state = {
        data: { name: "", lastName: "", email: "" },
        errors: {}
    };


    schema = {
        name: Joi.string().required().min(3).max(12).label('Name'),
        lastName: Joi.string().required().min(3).max(20).label('Lastname'),
        email: Joi.string().required().email().label('Email')
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt">
                    <div className="row">
                        <div className="side-box col-lg-3 col-md-3 contact">
                            <div className="contact-info">
                                <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" />
                                <h2>Contact Me</h2>
                                <h4>I would love to hear from you !</h4>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 middle">
                            <form action="mailto:saeid.dogani1989@gmail.com" method="POST" encType="multipart/form-data">
                                {this.renderInput('name', 'Name:')}
                                {this.renderInput('lastName', 'Last Name:')}
                                {this.renderInput('email', 'Email Address:', 'email')}
                                {this.renderButton('Contact')}
                            </form>
                        </div>
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        );
    }

}

export default Contact;