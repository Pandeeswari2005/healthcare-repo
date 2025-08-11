package com.examly.springapp.controller;

import com.examly.springapp.model.Appointment;
import com.examly.springapp.model.AppointmentRequest;
import com.examly.springapp.model.AppointmentStatus;

import com.examly.springapp.service.AppointmentService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.*;

import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

import java.time.LocalTime;

import java.time.format.DateTimeFormatter;

import java.util.LinkedHashMap;

import java.util.List;

import java.util.Map;

@RestController

@RequestMapping("/api/appointments")

public class AppointmentController {

    @Autowired

    private AppointmentService appointmentService;

    @PostMapping

    // public ResponseEntity<?> bookAppointment(

    // @RequestBody LinkedHashMap<String, Object> body) {

    // try {

    // if (body == null) {

    // return ResponseEntity.badRequest().body(Map.of("error", "Request body is
    // missing"));

    // }

    // Object patientIdObj = body.get("patientId");

    // Object doctorIdObj = body.get("doctorId");

    // Object dateObj = body.get("appointmentDate");

    // Object timeObj = body.get("appointmentTime");

    // Object reasonObj = body.get("reason");

    // if (patientIdObj == null || doctorIdObj == null || dateObj == null || timeObj
    // == null
    // || reasonObj == null) {

    // return ResponseEntity.badRequest().body(Map.of("error", "Missing required
    // fields"));

    // }

    // Long patientId = Long.parseLong(patientIdObj.toString());

    // Long doctorId = Long.parseLong(doctorIdObj.toString());

    // LocalDate date = LocalDate.parse(dateObj.toString());

    // LocalTime time = LocalTime.parse(timeObj.toString());

    // String reason = reasonObj.toString();

    // Appointment created = appointmentService.bookAppointment(patientId, doctorId,
    // date, time, reason);

    // return new ResponseEntity<>(created, HttpStatus.CREATED);

    // } catch (Exception e) {

    // e.printStackTrace();

    // return ResponseEntity.status(HttpStatus.CONFLICT)

    // .body(Map.of("error", e.getMessage()));

    // }

    // }
    public ResponseEntity<?> bookAppointment(@RequestBody AppointmentRequest request) {
    

    Long patientId = request.getPatientId();
    Long doctorId = request.getDoctorId();
    LocalDate date = LocalDate.parse(request.getAppointmentDate());
    LocalTime time = LocalTime.parse(request.getAppointmentTime());
    String reason = request.getReason();
    Appointment created = appointmentService.bookAppointment(patientId, doctorId, date, time, reason);
    return new ResponseEntity<>(created,HttpStatus.CREATED);
    }

    @PatchMapping("/{id}/status")

    public ResponseEntity<?> updateStatus(@PathVariable Long id, @RequestBody LinkedHashMap<String, Object> body) {

        try {

            AppointmentStatus status = AppointmentStatus.valueOf(body.get("status").toString());

            Appointment updated = appointmentService.updateStatus(id, status);

            return new ResponseEntity<>(updated, HttpStatus.OK);

        } catch (RuntimeException e) {

            e.printStackTrace();

            return ResponseEntity.status(HttpStatus.NOT_FOUND)

                    .body(Map.of("error", e.getMessage()));

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
