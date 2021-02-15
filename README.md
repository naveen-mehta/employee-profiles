# Employee Profiles  
![Sandpit](/public/sandpit-banner.png)

---
### Table of Contents
  - [Introduction](#introduction)
  - [Demo](#demo)
  - [Technologies used](#technologies-used)
  - [Mobile responsiveness](#mobile-responsiveness)
  - [Helper methods](#helper-methods)
  - [State management](#state-management)
  - [Improvements & assumptions](#improvements-and-assumptions)

---
### Introduction
This app was built using ReactJS and retrieves 2000 employee records from a backend API built in PHP. The PHP API was built as a part of this project. The Laravel framework was used for the backend server. 

Each employee profile is an object derived from a class using mock data stored on the server. Data is searched asynchronously from the API using fetch. Data can be filtered on the frontend based on gender without a page refresh. Employee cards flip on hover to show extra employee information.  

---
### Demo: 
Both applications can be viewed below:

**React Frontend:** [Employee Profiles App](https://sandpit-team.netlify.app/) / [github](https://github.com/naveen-mehta/employee-profiles)

**PHP Backend(API):** [Employee Profiles API](https://desolate-wave-40952.herokuapp.com/api/userinfo) / [github](https://github.com/naveen-mehta/employee-profiles-api)

---
## Technologies used
- ReactJS
- PHP (backend API)
- Laravel framework (backend)
- Javascript
- HTML
- CSS
- React Context API
- React Hooks
- MaterialUI
- React typed
- AOS
- Heroku (backend deployment)
- Netlify (frontend deployment)

---
## Mobile responsiveness
- This app is optimized for different screen sizes and was tested using the chrome emulator 

---
## Helper methods
-  Data is normalised using some helper functions
-  Employee records are retrieved using AJAX   

---
## State management
-  Context API was used for state management and updating props centrally

---
## Improvements and assumptions
- Pagination: as a part of this exercise, the API route was designed to send back all employee records without a limiter. This approach works fine for 2000 records as shown here but as the data grows, a more scalable approach would be to add a limit parameter with a start and size property to throttle requests coming from the client side
- Since the task mentioned that any data can be used for this exercise, the filtering was done by slicing data on the frontend based on gender instead of employee department. Another approach would be to add a new route in the backend that serves a subset of information to filter data on the client side






