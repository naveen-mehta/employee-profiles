import { useContext } from 'react';
import { Context } from '../../Context/Context';
import { normalizeData } from '../../Helpers/NormalizeData';

export const PageData = () => {
    const {
        empData,
        filter,
        activePage,
        setActivePage,
        profilesPerPage,
        setProfilesPerPage,
    } = useContext(Context);

    // update active page in context, fires when user selects a page
    const updateActivePage = (pageNum) => setActivePage(pageNum);

    const { currentProfiles, totalEmployees, pageCount } = normalizeData(
        filter,
        empData,
        activePage,
        profilesPerPage
    );

    return {
        updateActivePage,
        activePage,
        totalEmployees,
        pageCount,
        currentProfiles,
        setProfilesPerPage,
        profilesPerPage,
    };
};