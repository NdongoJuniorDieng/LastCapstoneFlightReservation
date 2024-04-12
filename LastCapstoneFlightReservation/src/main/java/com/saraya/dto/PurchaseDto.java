package com.saraya.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PurchaseDto {

    private Long purchase_id;
    private Integer credit_card_num;
    private LocalDate date;
    private Integer amount;
    private String email;
    private Long no_flight;
    private Integer number_of_tickets;
}
