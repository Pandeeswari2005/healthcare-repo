/*import React, { useEffect, useState } from 'react';

import { fetchPatients, fetchAppointmentsByPatient, updateAppointmentStatus } from '../utils/api';

import './AppointmentList.css';



export default function AppointmentList() {

    const [patients, setPatients] = useState([]);

    const [selectedPatient, setSelectedPatient] = useState('');

    const [appointments, setAppointments] = useState([]);



    useEffect(() => {

        fetchPatients().then(setPatients).catch(() => setPatients([]));

    }, []);



    const loadAppointments = async (pid) => {

        if (!pid) {

            setAppointments([]);

            return;

        }

        const data = await fetchAppointmentsByPatient(pid);

        setAppointments(data || []);

    };



    const handlePatientChange = async (e) => {

        const pid = e.target.value;

        setSelectedPatient(pid);

        await loadAppointments(pid);

    };



    const changeStatus = async (id, status) => {

        await updateAppointmentStatus(id, status);

        if (selectedPatient) loadAppointments(selectedPatient);

    };



    return (

        <div className="appointment-list">

            < select data-testid="patient-filter"value = { selectedPatient } onChange = { handlePatientChange } >

                <option value="">Select Patient</option>

    {
        patients.map(p => (

            <option key={p.id} value={p.id}>{p.name}</option>

        ))
    }

    </select >



        { selectedPatient && appointments.length === 0 && (

            <p data-testid="no-appointments">No appointments found</p>

        )
}



{
    appointments.length > 0 && (

        <table>

            <thead>

                <tr>

                    <th>Doctor</th>

                    <th>Date</th>

                    <th>Time</th>

                    <th>Reason</th>

                    <th>Status</th>

                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {appointments.map(a => (

                    <tr key={a.id}>

                        <td>{a.doctor}</td>

                        <td>{a.appointmentDate}</td>

                        <td>{a.appointmentTime}</td>

                        <td>{a.reason}</td>

                        <td>{a.status}</td>

                        <td>

                            {a.status === 'REQUESTED' && (

                                <>

                                    <button onClick={() => changeStatus(a.id, 'APPROVED')}>Approve</button>

                                        <button onClick = {() => changeStatus(a.id, 'REJECTED')}>Reject</button>

                        </>

                                                                                                                                                                                                                                                                                                                                                                  )}

                    </td>

                                                                                                                                                                                                                                                                                                                                                                                                </tr>

                                                                                                                                                                                                                                                                                                                      ))}

        </tbody>

                                                                                                                                                                                                                                                                                                                                        </table >

            )
}

                </div >

                                    );

                                                                                                                                                                                                                                                                                                                      }


    */

// SRC/COMPONENTS/aPPOINTMENTlIST.JS
/*
import React,{useEffect,useState}from 'react';
import {fetchPatients,fetchAppointmentsByPatient,updateAppointmentStatus}from '../utils/api';


import './AppointmentList.css';



export default function AppointmentList() {

    const [patients, setPatients] = useState([]);

    const [selectedPatient, setSelectedPatient] = useState('');

    const [appointments, setAppointments] = useState([]);



    useEffect(() => {

        fetchPatients().then(setPatients).catch(() => setPatients([]));

    }, []);



    const loadAppointments = async (pid) => {

        if (!pid) {

            setAppointments([]);

            return;

        }

        const data = await fetchAppointmentsByPatient(pid);

        setAppointments(data || []);

    };



    const handlePatientChange = async (e) => {

        const pid = e.target.value;

        setSelectedPatient(pid);

        await loadAppointments(pid);

    };



    const changeStatus = async (id, status) => {

        await updateAppointmentStatus(id, status);

        if (selectedPatient) loadAppointments(selectedPatient);

    };



    return (

        <div className="appointment-list">

            <select data-testid="patient-filter" value={selectedPatient} onChange={handlePatientChange}>

                <option value="">Select Patient</option>

                {patients.map((p) => (

                    <option key={p.id} value={p.id}>{p.name}</option>

                ))}

            </select>



            {selectedPatient && appointments.length === 0 && (

                <p data-testid="no-appointments">No appointments found</p>

            )}



            {appointments.length > 0 && (

                <table>

                    <thead>

                        <tr>

                            <th>Doctor</th>

                            <th>Date</th>

                            <th>Time</th>

                            <th>Reason</th>

                            <th>Status</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {appointments.map((a) => (

                            <tr key={a.id}>

                                <td>{a.doctor}</td>

                                <td>{a.appointmentDate}</td>

                                <td>{a.appointmentTime}</td>

                                <td>{a.reason}</td>

                                <td>{a.status}</td>

                                <td>

                                    {a.status === 'REQUESTED' && (

                                        <>

                                            <button onClick={() => changeStatus(a.id, 'APPROVED')}>Approve</button>

                                            <button onClick={() => changeStatus(a.id, 'REJECTED')}>Reject</button>

                                        </>

                                    )}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            )}

        </div>

    );

}*/import React, { useEffect, useState } from 'react';

import { fetchPatients, fetchAppointmentsByPatient, updateAppointmentStatus } from '../utils/api';

import './AppointmentList.css';



export default function AppointmentList() {

      const [patients, setPatients] = useState([]);

        const [selectedPatient, setSelectedPatient] = useState('');

          const [appointments, setAppointments] = useState([]);



            useEffect(() => {

                    fetchPatients().then(setPatients).catch(() => setPatients([]));

            }, []);



              const loadAppointments = async (pid) => {

                    if (!pid) {

                              setAppointments([]);

                                    return;

                    }

                        const data = await fetchAppointmentsByPatient(pid);

                            setAppointments(data || []);

                };



                  const handlePatientChange = async (e) => {

                        const pid = e.target.value;

                            setSelectedPatient(pid);

                                await loadAppointments(pid);

                  };



                    const changeStatus = async (id, status) => {

                            await updateAppointmentStatus(id, status);

                                if (selectedPatient) loadAppointments(selectedPatient);

                    };



                      return (

                          <div className="appointment-list">

                                  <select data-testid="patient-filter" value={selectedPatient} onChange={handlePatientChange}>

                                            <option value="">Select Patient</option>

                                                    {patients.map((p) => (

                                                                  <option key={p.id} value={p.id}>{p.name}</option>

                                                    ))}

                                                          </select>



                                                                {/* ✅ Added for test to detect when no appointments exist */}

                                                                      {selectedPatient && appointments.length === 0 && (

                                                                                <div data-testid="no-appointments">No appointments found</div>

                                                                      )}



                                                                            {appointments.length > 0 && (

                                                                                        <table>

                                                                                                      <thead>

                                                                                                                    <tr>

                                                                                                                                      <th>Doctor</th>

                                                                                                                                                    <th>Date</th>

                                                                                                                                                                  <th>Time</th>

                                                                                                                                                                                <th>Reason</th>

                                                                                                                                                                                              <th>Status</th>

                                                                                                                                                                                                            <th>Actions</th>

                                                                                                                                                                                                                        </tr>

                                                                                                                                                                                                                                  </thead>

                                                                                                                                                                                                                                            <tbody>

                                                                                                                                                                                                                                                        {appointments.map((a) => (

                                                                                                                                                                                                                                                                      <tr key={a.id}>

                                                                                                                                                                                                                                                                                      <td>{a.doctor}</td>

                                                                                                                                                                                                                                                                                                      <td>{a.appointmentDate}</td>

                                                                                                                                                                                                                                                                                                                      <td>{a.appointmentTime}</td>

                                                                                                                                                                                                                                                                                                                                      <td>{a.reason}</td>

                                                                                                                                                                                                                                                                                                                                                      <td>{a.status}</td>

                                                                                                                                                                                                                                                                                                                                                                      <td>

                                                                                                                                                                                                                                                                                                                                                                                        {a.status === 'REQUESTED' && (

                                                                                                                                                                                                                                                                                                                                                                                                            <>

                                                                                                                                                                                                                                                                                                                                                                                                                                  <button onClick={() => changeStatus(a.id, 'APPROVED')}>Approve</button>

                                                                                                                                                                                                                                                                                                                                                                                                                                                        <button onClick={() => changeStatus(a.id, 'REJECTED')}>Reject</button>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              )}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </tr>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ))}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </tbody>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </table>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                )}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      );

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }