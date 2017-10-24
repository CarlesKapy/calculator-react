import React from 'react';
import Screen from './Screen'
import Key from './Key'
import './Calculator.css';

const Calculator = () => {

    const pad = [
        ["7", "8", "9"],
        ["4", "5", "6"],
        ["1", "2", "3"],
        ["+", "0", "="]
    ]

    const keys = pad.map((rowKeys) => {
        const row = rowKeys.map((item) => {
            return <Key key={item} value={item}/>
        })
        return <div className="key-row">{row}</div>
    });

    return (
        <div className="calculator">
            <Screen/>
            <div className="keys">
                {keys}
            </div>
        </div>
    );
}

export default Calculator;