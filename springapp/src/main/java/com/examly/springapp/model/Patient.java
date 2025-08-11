package com.examly.springapp.model;



import jakarta.persistence.*;

import jakarta.validation.constraints.*;

import lombok.*;



import java.time.LocalDate;



@Entity

@Getter

@Setter

@NoArgsConstructor

@AllArgsConstructor
@Builder

public class Patient {

@Id

 @GeneratedValue(strategy = GenerationType.IDENTITY)

 private Long id;

 @NotBlank(message = "Name is required")

 @Size(min = 3, max = 50, message = "Name must be 3-50 characters")

 private String name;

 @Email(message = "Invalid email format")

 private String email;

 @Pattern(regexp = "\\d{10}", message = "Phone number must be 10 digits")

 private String phoneNumber;

 @Past(message = "Date of birth must be in the past")

 private LocalDate dateOfBirth;

}

