import React from 'react';
import Footer from '../Footer';
import Navbar from '../NavBar';
import HoleApp from './NoteApp/HoleApp';
import Example from './validateForm';
import ExternalWeb from './external-wesite/ExtertalWeb';
function WorkSample() {
    return (
        <div>
            <div>
            </div>
            {/* type note  */}
            <div className="container col-md-12">
                <div>&nbsp;</div>
                <div className="textArea">
                <h3 className="title-name">
                Comment Section:
                </h3>
                    <HoleApp />
                </div>
            </div>

            {/* sport news web */}
            <div className="container-fluid bg-light workSample-url">
                <ExternalWeb />
                {/*from validation */}
                <Example />
            </div>
        </div>
    )
}

export default WorkSample;