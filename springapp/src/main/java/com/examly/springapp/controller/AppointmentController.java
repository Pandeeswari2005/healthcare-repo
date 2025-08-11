package com.examly.springapp.controller;



import com.examly.springapp.model.Appointment;

import com.examly.springapp.model.AppointmentStatus;

import com.examly.springapp.service.AppointmentService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.*;

import org.springframework.web.bind.annotation.*;



import java.time.LocalDate;

import java.time.LocalTime;

import java.util.List;

import java.util.Map;



@RestController

@RequestMapping("/api/appointments")

public class AppointmentController {



@Autowired
 private AppointmentService appointmentService;
  @PostMapping

 public ResponseEntity<Appointment> bookAppointment(@RequestBody Map<String, Object> body) {

 try {
 Long patientId = Long.parseLong(body.get("patientId").toString());
  Long doctorId = Long.parseLong(body.get("doctorId").toString());
 LocalDate date = LocalDate.parse(body.get("appointmentDate").toString());
  LocalTime time = LocalTime.parse(body.get("appointmentTime").toString());
 String reason = body.get("reason").toString();
Appointment created = appointmentService.bookAppointment(patientId, doctorId, date, time, reason);
 return new ResponseEntity<>(created, HttpStatus.CREATED);
 } catch (RuntimeException e) {
 return new ResponseEntity<>(null, HttpStatus.CONFLICT);

}

}

@PatchMapping("/{id}/status")
 public ResponseEntity<Appointment> updateStatus(@PathVariable Long id, @RequestBody Map<String, String> body) {
 try {
AppointmentStatus status = AppointmentStatus.valueOf(body.get("status"));
Appointment updated = appointmentService.updateStatus(id, status);
 return new ResponseEntity<>(updated, HttpStatus.OK);
 } catch (RuntimeException e) {
return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
  }

 }
  @GetMapping("/patient/{patientId}")

public ResponseEntity<List<Appointment>> getByPatient(@PathVariable Long patientId) {
try {
 List<Appointment> appointments = appointmentService.getAppointmentsByPatient(patientId);

return new ResponseEntity<>(appointments, HttpStatus.OK);

  } catch (RuntimeException e) {
 return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
  }

 }
  }


                                                       