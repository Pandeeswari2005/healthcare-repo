import React from 'react';

import AppointmentForm from './components/AppointmentForm';

import AppointmentList from './components/AppointmentList';

import './App.css';



function App() {

      return (

            <div className="App">

             <h1>Healthcare Appointment System</h1>

             <AppointmentForm />

             <AppointmentList />

             </div>

      );

}



export default App;


