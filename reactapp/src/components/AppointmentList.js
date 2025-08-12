import React, { useState } from "react";



export default function AppointmentList({ appointments = [] }) {

      const [selectedPatient, setSelectedPatient] = useState("");



      const filteredAppointments = appointments.filter(

            (a) => !selectedPatient || a.patientId === selectedPatient

      );



      return (

            <div className="appointment-list-container">

                  < h2 > View Appointments</h2 >



                        <label>

                              Select Patient

                              <select

                                    value={selectedPatient}

                                    onChange={(e) => setSelectedPatient(e.target.value)}

                                    data-testid="patient-filter"

                              >

                                    <option value="">Select patient</option>

                                    <option value="1">Alice</option>

                                    <option value="2">Bob</option>

                              </select>

                        </label>



      {
            filteredAppointments.length === 0 ? (

                  <div data-testid="no-appointments">No appointments found</div>

            ) : (

            <ul>

                  {filteredAppointments.map((appt) => (

                        <li key={appt.id}>

                              Patient {appt.patientId} with Doctor {appt.doctorId} on{""}

                              {appt.appointmentDate} at {appt.appointmentTime}

                        </li>

                  ))}

            </ul>

      )
      }

                                                                                                                                        </div >

                                                                                                                                          );

}

