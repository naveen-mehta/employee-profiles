import React, { useState, createContext, useEffect } from 'react';
import { fetchEmployeeData } from '../Helpers/FetchEmployeeData'

export const Context = createContext();

export const Provider = ({ children }) => {

    // handle loading screen
    const [loading, setLoading] = useState(true);

    // employee data from API 
    const [empData, setEmpData] = useState([]); 

    // pagination
    const [activePage, setActivePage] = useState(1);

    // profiles per page
    const [profilesPerPage, setProfilesPerPage] = useState(8);

    // fetch data using helper function
    useEffect(() => {
        (async () => {
            const [_empData] = await Promise.all([
                fetchEmployeeData() 
            ]);
            setEmpData(_empData);
            setLoading(false);
        })();    
    }, []);
    
    return (
        <Context.Provider
            value={{
                loading,
                empData,
                activePage,
                setActivePage,
                profilesPerPage,
                setProfilesPerPage,          
            }}    
        >
            {children}
        </Context.Provider>
    );
};

