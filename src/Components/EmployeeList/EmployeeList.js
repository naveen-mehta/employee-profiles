import React, { useContext } from 'react';
import { Context } from '../../Context/Context'; 
import EmployeeCard from './EmployeeCard';

export const EmployeeList = () => {    
    const { empData: employees } = useContext(Context);
    
    return employees.map((employee, index) => {
        return <EmployeeCard key={index} {...employee} />
    });
};