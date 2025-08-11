package com.examly.springapp.model;



import jakarta.persistence.*;

import lombok.*;

import java.time.LocalDate;

import java.time.LocalDateTime;

import java.time.LocalTime;



@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Appointment {

@Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 
private Long id;
@ManyToOne
 private Patient patient;
 @ManyToOne

 private Doctor doctor;

 private LocalDate appointmentDate;



private LocalTime appointmentTime;

 private String reason;

 @Enumerated(EnumType.STRING)
 private AppointmentStatus status;
  private LocalDateTime createdAt;

}


