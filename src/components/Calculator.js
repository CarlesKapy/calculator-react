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
        if (value === "=") {
            if (this.state.value.length > 0) {
                const summands = this.state.value.split("+");
                const result = summands.reduce((carry, summand) => {
                    var _summand = parseInt(summand);
                    if (isNaN(_summand)) _summand = 0;
                    return carry + _summand;
                }, 0);
                this.setState({value: result});
            }
        } else if (value === "C") {
            this.setState({value: ""});
        } else {
            this.setState({value: this.state.value + "" + value})
        }
    }

    render() {
        const pad = [
            ["7", "8", "9"],
            ["4", "5", "6"],
            ["1", "2", "3"],
            ["+", "0", "="],
            ["C"],
        ]

        const keys = pad.map((rowKeys, index) => {
            const row = rowKeys.map((item) => {
                return <Key onPress={(value) => { this.updateScreen(value) }} key={item} value={item}/>
            })
            return <div key={"keyrow"+index} className="key-row">{row}</div>
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