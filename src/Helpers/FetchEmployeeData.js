// API url  
const url = 'https://desolate-wave-40952.herokuapp.com/api/userinfo';

export const fetchEmployeeData = async () => {
    const response = await fetch(url);
    const data = await response.json();    
    return data.emp;
};


