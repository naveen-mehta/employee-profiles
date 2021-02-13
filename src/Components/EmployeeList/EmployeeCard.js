import React from 'react';
import '../../Stylesheets/employeeList.css';

const EmployeeCard = ({ picture, name, email }) => {
    return (
        <article className='card'>
            <img src={picture.large} />
            <h4>{email}</h4>
            <h1>{name.first}</h1>
        </article>
    )
}

export default EmployeeCard;