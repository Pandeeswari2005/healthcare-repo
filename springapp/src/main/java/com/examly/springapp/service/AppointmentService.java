package com.examly.springapp.service;



import com.examly.springapp.model.*;

import com.examly.springapp.repository.*;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;



import java.time.LocalDate;

import java.time.LocalTime;

import java.util.List;

import java.util.Optional;



@Service

public class AppointmentService {

 @Autowired

private AppointmentRepository appointmentRepository;

@Autowired

private PatientRepository patientRepository;

 @Autowired

 private DoctorRepository doctorRepository;

 public Appointment bookAppointment(Long patientId, Long doctorId, LocalDate date, LocalTime time, String reason) {

if (appointmentRepository.existsByDoctorIdAndAppointmentDateAndAppointmentTime(doctorId, date, time)) {

throw new RuntimeException("Doctor not available at this time.");

}

 Patient patient = patientRepository.findById(patientId).orElseThrow(() -> new RuntimeException("Patient not found"));

 Doctor doctor = doctorRepository.findById(doctorId).orElseThrow(() -> new RuntimeException("Doctor not found"));

 Appointment appointment = Appointment.builder()

.patient(patient)
.doctor(doctor)
.appointmentDate(date)
.appointmentTime(time)
.reason(reason)
 .status(AppointmentStatus.REQUESTED)
.createdAt(java.time.LocalDateTime.now())
.build();
 return appointmentRepository.save(appointment);
  }
 public Appointment updateStatus(Long appointmentId, AppointmentStatus status) {
 Appointment appointment = appointmentRepository.findById(appointmentId).orElseThrow(() -> new RuntimeException("Appointment not found"));
 appointment.setStatus(status);
 return appointmentRepository.save(appointment);

}
 public List<Appointment> getAppointmentsByPatient(Long patientId) {
  if (!patientRepository.existsById(patientId)) {
 throw new RuntimeException("Patient not found");

 }

 return appointmentRepository.findByPatientId(patientId);
  }
  }

                                                                                                                                                                                                                                                                                            