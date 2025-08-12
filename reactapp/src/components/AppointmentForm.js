// import React, { useState } from "react";



// export default function AppointmentForm({ onSubmit }) {

//     const [formData, setFormData] = useState({

//         patientId: "",

//         doctorId: "",

//         appointmentDate: "",

//         appointmentTime: "",

//         reason: "",

//     });



//     const handleChange = (e) => {

//         setFormData({ ...formData, [e.target.name]: e.target.value });

//     };



//     const handleSubmit = (e) => {

//         e.preventDefault();

//         if (onSubmit) onSubmit(formData);

//         setFormData({

//             patientId: "",

//             doctorId: "",

//             appointmentDate: "",

//             appointmentTime: "",

//             reason: "",

//         });

//     };



//     return (

//         <form onSubmit={handleSubmit}>

//             <label>

//                 Patient:

//                 <select

//                     name="patientId"

//                     value={formData.patientId}

//                     onChange={handleChange}

//                     required

//                     data-testid="patient-select"

//                 >

//                     <option value="">Select patient</option>

//                     <option value="1">Alice</option>

//                     <option value="2">Bob</option>

//                 </select>

//             </label>



//             <label>

//                 Doctor:

//                 <select

//                     name="doctorId"

//                     value={formData.doctorId}

//                     onChange={handleChange}

//                     required

//                     data-testid="doctor-select"

//                 >

//                     <option value="">Select doctor</option>

//                     <option value="1">Dr. Smith (Cardiology)</option>

//                     <option value="2">Dr. Jane (Neurology)</option>

//                 </select>

//             </label>



//             <label>

//                 Date:

//                 <input

//                     type="date"

//                     name="appointmentDate"

//                     value={formData.appointmentDate}

//                     onChange={handleChange}

//                     required

//                     data-testid="date-input"

//                 />

//             </label>



//             <label>

//                 Time:

//                 <input

//                     type="time"

//                     name="appointmentTime"

//                     value={formData.appointmentTime}

//                     onChange={handleChange}

//                     required

//                     data-testid="time-input"

//                 />

//             </label>



//             <label>

//                 Reason:

//                 <textarea

//                     name="reason"

//                     value={formData.reason}

//                     onChange={handleChange}

//                     placeholder="Reason for appointment"

//                     required

//                     data-testid="reason-input"

//                 />

//             </label>



//             <button type="submit" data-testid="submit-button">

//                 Request Appointment

//             </button>

//         </form>

//     );

// }
import React, { useEffect, useState } from 'react';

import * as api from '../utils/api';



export default function AppointmentForm() {

    const [patients, setPatients] = useState([]);

    const [doctors, setDoctors] = useState([]);

    const [formData, setFormData] = useState({

        patient: '',

        doctor: '',

        date: '',

        time: '',

        reason: '',

    });

    const [errors, setErrors] = useState({});

    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);



    useEffect(() => {

        api.fetchPatients().then(setPatients);

        api.fetchDoctors().then(setDoctors);

    }, []);



    const validate = () => {

        const newErrors = {};

        if (!formData.patient) newErrors.patient = 'Patient is required';

        if (!formData.doctor) newErrors.doctor = 'Doctor is required';

        if (!formData.date) newErrors.date = 'Date is required';

        if (!formData.time) newErrors.time = 'Time is required';

        if (!formData.reason) newErrors.reason = 'Reason is required';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    };



    const handleChange = (e) => {

        setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));

    };



    const handleSubmit = async (e) => {

        e.preventDefault();

        setMessage('');

        if (!validate()) return;



        setLoading(true);

        try {

            await api.createAppointment({

                patientId: formData.patient,

                doctorId: formData.doctor,

                appointmentDate: formData.date,

                appointmentTime: formData.time,

                reason: formData.reason,

            });

            setMessage('Appointment successfully booked');

            setFormData({

                patient: '',

                doctor: '',

                date: '',

                time: '',

                reason: '',

            });

            setErrors({});

        } catch {

            setMessage('Server error');

        }

        setLoading(false);

    };



    return (

        <form onSubmit={handleSubmit}>

            <div>

                <label>Patient:</label>

                <select

                    data-testid="patient-select"

                    name="patient"

                    value={formData.patient}

                    onChange={handleChange}

                >

                    <option value="">Select patient</option>

                    {patients.map((p) => (

                        <option key={p.id} value={p.id.toString()}>

                            {p.name}

                        </option>

                    ))}

                </select>

                {errors.patient && <p>{errors.patient}</p>}

            </div>



            <div>

                <label>Doctor:</label>

                <select

                    data-testid="doctor-select"

                    name="doctor"

                    value={formData.doctor}

                    onChange={handleChange}

                >

                    <option value="">Select doctor</option>

                    {doctors.map((d) => (

                        <option key={d.id} value={d.id.toString()}>

                            {d.name} ({d.specialization})

                        </option>

                    ))}

                </select>

                {errors.doctor && <p>{errors.doctor}</p>}

            </div>



            <div>

                <label>Date:</label>

                <input

                    data-testid="date-input"

                    type="date"

                    name="date"

                    value={formData.date}

                    onChange={handleChange}

                />

                {errors.date && <p>{errors.date}</p>}

            </div>



            <div>

                <label>Time:</label>

                <input

                    data-testid="time-input"

                    type="time"

                    name="time"

                    value={formData.time}

                    onChange={handleChange}

                />

                {errors.time && <p>{errors.time}</p>}

            </div>



            <div>

                <label>Reason:</label>

                <input

                    data-testid="reason-input"

                    type="text"

                    name="reason"

                    value={formData.reason}

                    onChange={handleChange}

                />

                {errors.reason && <p>{errors.reason}</p>}

            </div>



            <button type="submit" disabled={loading}>

                Book Appointment

            </button>



            {message && <p>{message}</p>}

        </form>

    );

}

