import React from 'react';
import './../App.css';

export const Square = (props) => {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}