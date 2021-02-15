import React from 'react';
import '../../Stylesheets/employeeList.css';
import { useState } from 'react';

const EmployeeCard = ({ picture, name, email, location, dob, id }) => {
    const[toggleClass, setToggleClass] = useState(false);
    
    const flip = (e) => {
        setToggleClass(!toggleClass);
    }

    return (
        <div 
            onMouseEnter={(e, value) => {flip(e.target)}}
            onMouseLeave={(e, value) => {flip(e.target)}}
            className="card-wrapper"
            data-aos="zoom-in" 
            data-aos-duration="1000"   
        >
            <div 
                className={toggleClass ? 'card is-flipped' : 'card'}
            >
                <div className="card__face card__face--front">
                    <article>
                        <img src={picture.large} alt="Employee Card"/>
                        <p>{email}</p>
                        <p>{location.country}</p>
                        <h1>{name.first}</h1>
                    </article> 
                </div>
                <div className="card__face card__face--back">
                    <p>Age: {dob.age}</p>
                    <p>Emp ID: {location.street.number}</p>
                    <p>Post Code: {location.postcode}</p> 
                    <p>Dept ID: {id.value}</p>
                </div>
            </div>
        </div>
    )
}

export default EmployeeCard;
