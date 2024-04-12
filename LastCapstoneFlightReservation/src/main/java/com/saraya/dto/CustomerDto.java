package com.saraya.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CustomerDto {

    private Long cust_id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private LocalDate birthDay;
    private Integer phoneNumber;
}
