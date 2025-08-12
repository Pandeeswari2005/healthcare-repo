

/*let patients = [

  { id: '1', name: 'John Doe' },

  { id: '2', name: 'Mary Jane' }

];



// Mock doctor data

let doctors = [

  { id: '1', name: 'Dr. Smith', specialization: 'Cardiology' },

  { id: '2', name: 'Dr. Jane', specialization: 'Pediatrics' }

];



// Mock appointments storage

let appointments = [];



// Simulate network delay helper

const delay = (ms) => new Promise(res => setTimeout(res, ms));



// Fetch all patients

export const fetchPatients = async () => {

  //await delay(300);

  return patients;

};



// Fetch all doctors

export const fetchDoctors = async () => {

  //await delay(300);

  return doctors;

};



// Create new appointment

export const createAppointment = async (appointmentData) => {

  //await delay(300);
  if (appointmentData.reason === 'fail') {
    return Promise.reject(new Error('API failure'));
  }
  const newAppointment = {

    id: String(appointments.length + 1),            // id as string

    patientId: String(appointmentData.patientId),   // string ids

    doctorId: String(appointmentData.doctorId),

    appointmentDate: appointmentData.appointmentDate,

    appointmentTime: appointmentData.appointmentTime,

    reason: appointmentData.reason,

    status: 'REQUESTED'

  };

  appointments.push(newAppointment);

  return newAppointment;

};



// Fetch appointments by patient ID

export const fetchAppointmentsByPatient = async (patientId) => {

  //await delay(300);

  const filtered = appointments.filter(a => a.patientId === String(patientId));

  return filtered.map(a => {

    const doctor = doctors.find(d => d.id === a.doctorId);

    return {

      ...a,

      doctor: doctor ? doctor.name : 'Unknown Doctor',

    };

  });

};



// Update appointment status

export const updateAppointmentStatus = async (id, status) => {

 // await delay(300);

  const appointment = appointments.find(a => a.id === String(id));

  if (appointment) {

    appointment.status = status;

    const doctor = doctors.find(d => d.id === appointment.doctorId);

    return {

      ...appointment,

      doctor: doctor ? doctor.name : 'Unknown Doctor',

    };

  }

  throw new Error('Appointment not found');

};
*/

// api.js - mock version (no backend calls, simulate data locally)



// Mock patient data

let patients = [

    { id: '1', name: 'John Doe' },

      { id: '2', name: 'Mary Jane' }

];



// Mock doctor data

let doctors = [

    { id: '1', name: 'Dr. Smith', specialization: 'Cardiology' },

      { id: '2', name: 'Dr. Jane', specialization: 'Pediatrics' }

];



// Mock appointments storage

let appointments = [];



// (Optional) Simulate network delay - disabled for tests

// const delay = (ms) => new Promise(res => setTimeout(res, ms));



// Fetch all patients

export const fetchPatients = async () => {

    // await delay(300);

      return patients;

};



// Fetch all doctors

export const fetchDoctors = async () => {

    // await delay(300);

      return doctors;

};



// Create new appointment

export const createAppointment = async (appointmentData) => {

    // await delay(300);

      if (appointmentData.reason === 'fail') {

            return Promise.reject(new Error('API failure'));

      }



        const newAppointment = {

              id: String(appointments.length + 1),

                  patientId: String(appointmentData.patientId),

                      doctorId: String(appointmentData.doctorId),

                          appointmentDate: appointmentData.appointmentDate,

                              appointmentTime: appointmentData.appointmentTime,

                                  reason: appointmentData.reason,

                                      status: 'REQUESTED'

        };



          appointments.push(newAppointment);

            return newAppointment;

      };



      // Fetch appointments by patient ID

      export const fetchAppointmentsByPatient = async (patientId) => {

          // await delay(300);

            const filtered = appointments.filter(a => a.patientId === String(patientId));



              return filtered.map(a => {

                    const doctor = doctors.find(d => d.id === a.doctorId);

                        return {

                                ...a,

                                      doctor: doctor ? doctor.name : 'Unknown Doctor',

                        };

                      });

                    };



                    // Update appointment status

                    export const updateAppointmentStatus = async (id, status) => {

                        // await delay(300);

                          const appointment = appointments.find(a => a.id === String(id));



                            if (appointment) {

                                  appointment.status = status;

                                      const doctor = doctors.find(d => d.id === appointment.doctorId);

                                          return {

                                                  ...appointment,

                                                        doctor: doctor ? doctor.name : 'Unknown Doctor',

                                          };

                                        }



                                          throw new Error('Appointment not found');

                                      };

                                      