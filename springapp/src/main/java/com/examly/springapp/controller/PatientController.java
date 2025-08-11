package com.examly.springapp.controller;

import com.examly.springapp.model.Patient;

import com.examly.springapp.service.PatientService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/patients")

public class PatientController {

    @Autowired

    private PatientService patientService;


    @PostMapping

    public ResponseEntity<?> createPatient(@Valid @RequestBody Patient patient) {

        Patient saved = patientService.createPatient(patient);

        return ResponseEntity.status(201).body(saved);

    }



    @GetMapping

    public List<Patient> getAllPatients() {

        return patientService.getAllPatients();

    }

}
