export const normalizeData = (
    filter,
    empData,
    activePage,
    profilesPerPage
) => {
    
    // index calculation to slice data so only active profiles are displayed on the page
    const lastIndex = activePage * profilesPerPage;
    const firstIndex = lastIndex - profilesPerPage;

    // slice employee data to display active profiles
    let currentProfiles = empData.slice(firstIndex, lastIndex);

    // all employees
    let totalEmployees = empData.length

    // filter employees based on gender
    if (filter) {
        let filteredProfiles  = empData.filter((employee) => 
            employee.gender === filter 
        );
        console.log(totalEmployees);
        currentProfiles = filteredProfiles.slice(firstIndex, lastIndex); 

        // update totalEmployees if filter is selected
        totalEmployees = filteredProfiles.length;        
    }

    // calculate total pages for the pagination component to display page count
    const pageCount = Math.ceil(totalEmployees / profilesPerPage);

    return { currentProfiles, totalEmployees, pageCount };
};

