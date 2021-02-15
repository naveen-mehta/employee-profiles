import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import '../../Stylesheets/pagination.css';
import { PageData } from './PageData';

const Paginate = () => {
   const { updateActivePage, activePage, pageCount } = PageData();

    return (
        <Pagination
            className='pagination' 
            count={pageCount}
            page={activePage}
            onChange={(e, val) => updateActivePage(val)}
            data-aos="fade-up" 
            data-aos-duration="2000"
            size="small"
        />
    );
};

export default Paginate;