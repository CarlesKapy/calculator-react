import React from 'react';
import './Key.css';

const Key = (props) => 
    <button className="key-button" onClick={() => {props.onClick(props.value)}} >{props.value}</button>

export default Key;