package com.saraya.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "booking")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_ticket;

    @Column(name = "airline")
    private String airline;
    @Column(name = "airport")
    private String airport;
    @Column(name = "arrival_airport")
    private String arrivalAirport;
    @Column(name = "departure")
    private String departure;
    @Column(name = "arrival")
    private String arrival;
    @Column(name = "price")
    private Long price;
    @Column(name = "duration")
    private Long duration;
    @Column(name = "flight_no")
    private Long flightNo;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")
    private Customers customer;


}
