import React, { createContext, useState, useEffect } from 'react';

import class11Data from '../Data/class11Data.json';
import class12Data from '../Data/class12Data.json';

export const DataProvider = createContext();

function Context(props) {
    const [data, setData] = useState({class11:null ,class12:null});

    useEffect(() => {
        setData({
            class11: class11Data,
            class12: class12Data,
        });
    }, []);

    return (
        <DataProvider.Provider value={[data, setData]}>
            {props.children}
        </DataProvider.Provider>
    );
}

export default Context;


