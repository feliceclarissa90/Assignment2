import { useState, useEffect } from 'react';

export const useHome = () => {
    const [username, setUsername] = useState('Sasa Money Changer');
    const [currency, setCurrency] = useState({});

    //function getter
    const getUsername = (() => {
        return username;
    })

    useEffect (() => {
        fetch(
            'https://api.currencyfreaks.com/latest?apikey=88a36a440fe54a8589b5e46c3d922a99'
        )
        .then((res) => res.json())
        .then((result) => setCurrency(result.rates));
    },[])

    return {
        getUsername,
        currency,
    }
}