import React, { useState } from 'react';

function Input(props) {

    return (
        <div className="form-group">
            <input
                onChange={props.onChange}
                className="form-control"
                value={props.value}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Input;