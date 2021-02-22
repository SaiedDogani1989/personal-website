import React, { useState } from 'react';
import Side from './Contact-text';
import Input from './input';
import Footer from "../Footer"
import Navbar from "../NavBar"
import "./style/contact.css"

function Contact() {

    const [inputValue, setInput] = useState({
        fullName: "",
        email: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setInput((preValue) => {
            if (name === "fullName") {
                return {
                    ...preValue,
                    fullName: value
                }
            }
            else if (name === "email") {
                return {
                    ...preValue,
                    email: value
                }
            }
        })
    }

    const [isInputFill, SetInputFill] = useState(false)

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
                            <Input onChange={handleChange} value={inputValue.fullName} name="fullName" type="text" placeholder="Full Name" />
                            <Input onChange={handleChange} value={inputValue.email} name="email" type="email" placeholder="Email" />
                            <button
                                onClick={onSubmit}
                                disabled={(inputValue.fullName === "" || inputValue.email === "") && "disabled"}
                                className="btn btn-primary mt-3">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;