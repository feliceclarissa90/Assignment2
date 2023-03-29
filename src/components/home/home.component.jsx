import React from 'react';
import {useHome} from './home.hook';
import './home.css';

const Home = () => {
    const {
        getUsername,
        currency,
    } = useHome();

    return (
        <div>
            <h1>{getUsername()}</h1>

            <table>
                <tr>
                    <th>Currency</th>
                    <th>We Buy</th>
                    <th>Exchange Rate</th>
                    <th>We Sell</th>
                </tr>

                <tr>
                    <td>CAD</td>
                    <td>{currency && (currency.CAD * 1.05)}</td>
                    <td>{currency && currency.CAD}</td>
                    <td>{currency && (currency.CAD * 0.95)}</td>
                </tr>

                <tr>
                    <td>EUR</td>
                    <td>{currency && (currency.EUR * 1.05)}</td>
                    <td>{currency && currency.EUR}</td>
                    <td>{currency && (currency.EUR * 0.95)}</td>
                </tr>
                
                <tr>
                    <td>IDR</td>
                    <td>{currency && (currency.IDR * 1.05)}</td>
                    <td>{currency && currency.IDR}</td>
                    <td>{currency && (currency.IDR * 0.95)}</td>
                </tr>

                <tr>
                    <td>JPY</td>
                    <td>{currency && (currency.JPY * 1.05)}</td>
                    <td>{currency && currency.JPY}</td>
                    <td>{currency && (currency.JPY * 0.95)}</td>
                </tr>

                <tr>
                    <td>CHF</td>
                    <td>{currency && (currency.CHF * 1.05)}</td>
                    <td>{currency && currency.CHF}</td>
                    <td>{currency && (currency.CHF * 0.95)}</td>
                </tr>

                <tr>
                    <td>GBP</td>
                    <td>{currency && (currency.GBP * 1.05)}</td>
                    <td>{currency && currency.GBP}</td>
                    <td>{currency && (currency.GBP * 0.95)}</td>
                </tr>

            </table>

            <p>Rates are based from 1 USD.</p>
            <p>This application uses API from https://currencyfreaks.com.</p>
        </div>
    )
};

export default Home;