package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.Patient;

public interface PatientRepository extends JpaRepository<Patient,Long>  {

}
