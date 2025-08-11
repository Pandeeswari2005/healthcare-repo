// src/components/AppointmentForm.js
import React, { useEffect, useState } from 'react';

import './AppointmentForm.css';

import * as api from '../utils/api'; // ✅ Assuming your mock functions are here



export default function AppointmentForm() {

        const [patients, setPatients] = useState([]);

        const [doctors, setDoctors] = useState([]);

        const [formData, setFormData] = useState({

                patient: '',

                doctor: '',

                date: '',

                time: '',

                reason: ''

        });

        const [errors, setErrors] = useState({});

        const [message, setMessage] = useState('');



        useEffect(() => {

                api.fetchPatients().then(setPatients);

                api.fetchDoctors().then(setDoctors);

        }, []);



        const validate = () => {

                const e = {};

                if (!formData.patient) e.patient = 'Patient is required';

                if (!formData.doctor) e.doctor = 'Doctor is required';

                if (!formData.date) e.date = 'Date is required';

                if (!formData.time) e.time = 'Time is required';

                if (!formData.reason) e.reason = 'Reason is required';

                setErrors(e);

                return Object.keys(e).length === 0;

        };



        const handleChange = (e) => {

                setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

        };



        const handleSubmit = async (e) => {

                e.preventDefault();

                setMessage('');

                if (!validate()) return;



                try {

                        await api.createAppointment({

                                patientId: Number(formData.patient),

                                doctorId: Number(formData.doctor),

                                appointmentDate: formData.date,

                                appointmentTime: formData.time,

                                reason: formData.reason,
                                status: 'REQUESTED'

                        });



                        

                        setFormData({ patient: '', doctor: '', date: '', time: '', reason: '' });
                        setErrors({});
                        setMessage('Appointment successfully booked');

                } catch (err) {

                        setMessage('Server error');

                }

        };



        return (

                <form className="appointment-form" onSubmit={handleSubmit}>

                        <select

                                name="patient"

                                value={formData.patient}

                                onChange={handleChange}

                                data-testid="patient-select"

                        >

                                <option value="">Select Patient</option>

                                {patients.map(p => (

                                        <option key={p.id} value={p.id}>

                                                {p.name}

                                        </option>

                                ))}

                        </select>

                        {errors.patient && <p className="error">{errors.patient}</p>}



                        <select

                                name="doctor"

                                value={formData.doctor}

                                onChange={handleChange}

                                data-testid="doctor-select"

                        >

                                <option value="">Select Doctor</option>

                                {doctors.map((d) => (

                                        <option key={d.id} value={d.id}>

                                                {d.name} ({d.specialization})

                                        </option>

                                ))}

                        </select>

                        {errors.doctor && <p className="error">{errors.doctor}</p>}



                        <input

                                type="date"

                                name="date"

                                value={formData.date}

                                onChange={handleChange}

                                data-testid="date-input"

                        />

                        {errors.date && <p className="error">{errors.date}</p>}



                        <input

                                type="time"

                                name="time"

                                value={formData.time}

                                onChange={handleChange}

                                data-testid="time-input"

                        />

                        {errors.time && <p className="error">{errors.time}</p>}



                        <input

                                type="text"

                                name="reason"

                                placeholder="Reason"

                                value={formData.reason}

                                onChange={handleChange}

                                data-testid="reason-input"

                        />

                        {errors.reason && <p className="error">{errors.reason}</p>}



                        <button type="submit" data-testid="submit-button">

                                Book Appointment

                        </button>



                        {message &&<p>{message}</p>}

                </form>

        );

}/*
export async function fillForm() {

          // Dynamically import testing utilities only when called in test environment

            const { screen, fireEvent } = await import('@testing-library/react');



              const patientSelect = screen.getByTestId('patient-select');

                fireEvent.change(patientSelect, { target: { value: patientSelect.options[1]?.value || '' } });



                  const doctorSelect = screen.getByTestId('doctor-select');

                    fireEvent.change(doctorSelect, { target: { value: doctorSelect.options[1]?.value || '' } });



                      const dateInput = screen.getByTestId('date-input');

                        fireEvent.change(dateInput, { target: { value: '2025-08-15' } });



                          const timeInput = screen.getByTestId('time-input');

                            fireEvent.change(timeInput, { target: { value: '14:30' } });



                              const reasonInput = screen.getByTestId('reason-input');

                                fireEvent.change(reasonInput, { target: { value: 'Routine checkup' } });

}*/