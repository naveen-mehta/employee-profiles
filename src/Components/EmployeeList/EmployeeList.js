import React, { useContext } from 'react';
import { Context } from '../../Context/Context'; 
import EmployeeCard from './EmployeeCard';

export const EmployeeList = () => {    
    const { empData, profilesPerPage, activePage } = useContext(Context);
    
    // index calculation to slice data so only active profiles are displayed on the page
    const lastIndex = activePage * profilesPerPage;
    const firstIndex = lastIndex - profilesPerPage;

    // slice employee data to display active profiles
    let currentProfiles = empData.slice(firstIndex, lastIndex);

    // loop through the sliced data and display filtered employee cards
    return currentProfiles.map((employee, index) => {
        return <EmployeeCard key={index} {...employee} />
    });
};