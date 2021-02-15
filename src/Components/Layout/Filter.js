import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import '../../Stylesheets/filter.css';

const Filter = () => {
    const { filter, setFilter } = useContext(Context);

    const filterOptions = {
        'All': '',
        'Males': 'male',
        'Females': 'female',
    };

    // Toggle class based on status change. Highlight if active. 
    const isActive = (state, value) => {
        if (state === value) return 'active';
    };

    const filterByGender = () => {
        return Object.entries(filterOptions).map(([key, value]) => (
            <li
                key={value}
                className={isActive(filter, value)}
                onClick={() => setFilter(value)}
            >
                {key}
            </li>
        ));
    };

    return <ul className='filter'>{filterByGender()}</ul>;
};

export default Filter;