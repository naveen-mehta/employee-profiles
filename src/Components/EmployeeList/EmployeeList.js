import React from 'react';
import { PageData } from '../Pagination/PageData';
import EmployeeCard from './EmployeeCard';

export const EmployeeList = () => {    
    const { currentProfiles } = PageData();

    // loop through the sliced data and display filtered employee cards
    return currentProfiles.map((employee) => {
        const { email } = employee;
        return <EmployeeCard key={email} {...employee} />
    });
};