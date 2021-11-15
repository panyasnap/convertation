import React, {useState} from 'react';
import {url} from "../utils.js";
const Conversion = () => {

    const [currentValue, setCurrentValue] = useState('')
    const [to, setTo] = useState('')
    const [from, setFrom] = useState('')
    const [res, setRes] = useState('Введите валюту в формате сумма из какой валюты в какую')
    const conver = (sum, to, from) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setRes(data.rates[from] / data.rates[to] * sum)
            })
    }
    const conversation = (e) => {

        setCurrentValue(e.target.value.toUpperCase())
        let newArr = currentValue.toString().split(' ')

        let sum = newArr[0];
        setTo(newArr[1])
        setFrom(newArr[3])
            if (e.key === 'Enter') {
        conver(sum, to, from)
         }
    }
    return (
        <div>

                <input onChange={conversation} onKeyPress={conversation} value={currentValue} type='text'/>

            <div>{!isNaN(res) ? res.toFixed(2) + from : 'Введите валюту в формате "sum RUB in USD"'}</div>
        </div>
    );
};

export default Conversion;