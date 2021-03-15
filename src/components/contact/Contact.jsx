import React, { useState } from 'react';
import Side from './Contact-text';
import "./style/contact.css"

function Contact() {

    const [isInputFill, SetInputFill] = useState(false)

    function onSubmit() {
        SetInputFill(true)
    }

    function onSubmit() {
        SetInputFill(true)
    }

    return (

        <div>
            <div className="container">
                <div className="row">
                    <Side />
                    <div className="col-lg-8 col-md-8 middle">
                        <form action="mailto:saeid.dogani1989@gmail.com" method="POST" encType="multipart/form-data">
                            <button
                                onClick={onSubmit}
                                className="btn btn-primary btn-contact mt-3">
                                Send me an email
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;