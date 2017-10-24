import React, { Component } from 'react';
import Screen from './Screen'
import Key from './Key'
import './Calculator.css';

class Calculator extends Component{

    constructor(props) {
        super(props);

        this.state = {
            value: ""
        }
    }

    updateScreen(value) {
        this.setState({value: this.state.value + "" + value})
    }

    render() {
        const pad = [
            ["7", "8", "9"],
            ["4", "5", "6"],
            ["1", "2", "3"],
            ["+", "0", "="]
        ]

        const keys = pad.map((rowKeys) => {
            const row = rowKeys.map((item) => {
                return <Key onClick={(value) => { this.updateScreen(item) }} key={item} value={item}/>
            })
            return <div className="key-row">{row}</div>
        });

        return (
            <div className="calculator">
                <Screen value={this.state.value}/>
                <div className="keys">
                    {keys}
                </div>
            </div>
        );
    }
}

export default Calculator;