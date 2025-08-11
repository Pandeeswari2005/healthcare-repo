package com.examly.springapp.model;

import lombok.Data;

@Data
public class AppointmentRequest {
    private Long patientId;
    private Long doctorId;
    private String appointmentDate;
    private String appointmentTime;
    private String reason;

}
