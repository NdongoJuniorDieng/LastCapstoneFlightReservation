package com.saraya.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
@Entity
@Table(name = "purchase")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long purchase_id;
    @Column(name = "credit_card_num")
    private Integer credit_card_num;
    @Column(name = "date")
    private LocalDate date;
    @Column(name = "amount")
    private Integer amount;
    @Column(name = "email")
    private String email;
    @Column(name = "no_flight")
    private Long no_flight;
    @Column(name = "number_of_tickets")
    private Integer number_of_tickets;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")
    private Customers customer;
}
