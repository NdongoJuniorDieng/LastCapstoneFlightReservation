package com.saraya.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "customers")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Customers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cust_id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;
    @Column(name = "user_email")
    private String email;
    @Column(name = "birth_day")
    private LocalDate birthDay;
    @Column(name = "phone_number")
    private Integer phoneNumber;

    //LINK BETWEEN ENTITY(class)
    @OneToMany(cascade = CascadeType.ALL)
    private List<Booking> booking;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Purchase> purchase;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "admin_id")
    private Admin admin;
}
