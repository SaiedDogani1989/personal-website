import React from 'react';
import { Link } from 'react-router-dom';



function Navigation(props) {

    return (
        <div className="item blog-call-to-action">
            <button className="btn bg-light mr-2">
                <Link className="button text-center" to={props.path}>
                    {props.label}
                </Link>
            </button>
        </div>
    )
}

export default Navigation;