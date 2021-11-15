import React, {useEffect, useState} from 'react';
import {url} from "../utils";

const Newcurrency = () => {
    const [res, setRes] = useState([])
    const [usd, setUsd] = useState(0);
    const [eur, setEur] = useState(0);
    let lang = navigator.language
    if (lang === 'ru-RU') {
        lang = 'RUB'
    } else {
        lang = 'USD'
    }
    const [currency, setCurrency] = useState(lang)
    const changeCurrency = (e) => {
        setCurrency(e)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setUsd(data.rates[e] / data.rates.USD)
                setEur(data.rates[e] / data.rates.EUR)

            })
    }


    useEffect(() => {

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let info = Object.keys(data.rates)
                setRes(info)
                setUsd(data.rates[currency] / data.rates.USD)
                setEur(data.rates[currency] / data.rates.EUR)
            })

    }, [currency])

    return (
        <div>
            <div>базовая валюта: <select value={currency} onChange={e => changeCurrency(e.target.value)}>
                {res.map(item => {
                    return (<option value={item} key={item}>{item}</option>)
                })}
            </select></div>

            <div>usd {usd.toFixed(2)}</div>
            <div>eur {eur.toFixed(2)}</div>
        </div>
    );
};

export default Newcurrency;