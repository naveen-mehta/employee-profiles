import React from 'react';
import '../../Stylesheets/employeeList.css';
import { useState } from 'react';

const EmployeeCard = ({ picture, name, email }) => {
    const[toggleClass, setToggleClass] = useState(false);
    
    const flip = (e) => {
        setToggleClass(!toggleClass);
    }

    return (
        <div 
            onMouseEnter={(e, value) => {flip(e.target)}}
            onMouseLeave={(e, value) => {flip(e.target)}}
        >
            <div 
                className={toggleClass ? 'card is-flipped' : 'card'}
            >
                <div className="card__face card__face--front">
                    <article>
                        <img src={picture.large} />
                        <h4>{email}</h4>
                        <h1>{name.first}</h1>
                    </article> 
                </div>
                <div className="card__face card__face--back">
                    {name.last}
                </div>
            </div>
        </div>
    )
}

export default EmployeeCard;
