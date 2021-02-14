import React, { useContext } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { Context } from '../../Context/Context';
import '../../Stylesheets/pagination.css';

const Paginate = () => {
    const { empData, profilesPerPage, activePage, setActivePage } = useContext(Context);
    
    // calculate total pages for the pagination component to display page count
    const pageCount = Math.ceil(empData.length / profilesPerPage)

    // update active page in context, fires when user selects a page
    const updateActivePage = (pageNum) => setActivePage(pageNum);

    return (
        <Pagination
            className='pagination' 
            onChange={(event, val) => {updateActivePage(val)}}
            count={pageCount}
            page={activePage} 
            data-aos="fade-up"
            data-aos-delay="500" 
            data-aos-duration="3000"
        />
    );
};

export default Paginate;