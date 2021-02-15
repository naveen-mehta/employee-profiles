import React, { useContext } from 'react';
import { Context } from '../Context/Context';
import { EmployeeList } from '../Components/EmployeeList/EmployeeList';
import Paginate from '../Components/Pagination/Pagination';
import Loading from '../Components/Layout/Loading';
import Footer from '../Components/Layout/Footer';
import Filter from '../Components/Layout/Filter';

export const Employees = () => {
    const { loading } = useContext(Context)

    // display loading screen until API data fetch promise is resolved
    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Filter />
            <Paginate />
            <div className="card-container">
                <EmployeeList />
            </div>
            <Footer />
        </>
    )
}
