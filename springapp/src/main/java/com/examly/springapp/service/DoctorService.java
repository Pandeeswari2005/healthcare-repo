package com.examly.springapp.service;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.examly.springapp.model.Doctor;

import com.examly.springapp.repository.DoctorRepository;



import java.util.List;

import java.util.Optional;



@Service
public class DoctorService {



        @Autowired
            private DoctorRepository doctorRepository;

            public Doctor createDoctor(Doctor doctor) {

             return doctorRepository.save(doctor);

            }

            public List<Doctor> getAllDoctors() {

            return doctorRepository.findAll();

          }

       public Optional<Doctor> getDoctorById(Long id) {
       return doctorRepository.findById(id);

         }
    public void deleteDoctor(Long id) {

    doctorRepository.deleteById(id);

    }

     }

                                        