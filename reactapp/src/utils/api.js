

let patients = [

  { id: '1', name: 'John Doe' },

  { id: '2', name: 'Mary Jane' }

];



// Mock doctor data

let doctors = [

  { id: '1', name: 'Dr. Smith', specialization: 'Cardiology' },

  { id: '2', name: 'Dr. Jane', specialization: 'Pediatrics' }

];




let appointments = [];








export const fetchPatients = async () => {



  return patients;

};




export const fetchDoctors = async () => {



  return doctors;

};





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





export const fetchAppointmentsByPatient = async (patientId) => {


  const filtered = appointments.filter(a => a.patientId === String(patientId));



  return filtered.map(a => {

    const doctor = doctors.find(d => d.id === a.doctorId);

    return {

      ...a,

      doctor: doctor ? doctor.name : 'Unknown Doctor',

    };

  });

};




export const updateAppointmentStatus = async (id, status) => {



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

