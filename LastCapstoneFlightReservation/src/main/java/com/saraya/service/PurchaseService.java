package com.saraya.service;

import com.saraya.dto.PurchaseDto;
import com.saraya.model.Purchase;
import com.saraya.repository.PurchaseRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PurchaseService {

    private final ModelMapper mapper;

    @Autowired
    private PurchaseRepo purchaseRepo;

    public PurchaseService(ModelMapper mapper) {
        this.mapper = mapper;
    }

    public List<Purchase> getAll(){
        return purchaseRepo.findAll();
    }

    public PurchaseDto create(PurchaseDto dto){
        Purchase purchase = mapper.map(dto, Purchase.class);
        purchase = purchaseRepo.save(purchase);

        PurchaseDto purchaseDto = mapper.map(purchase, PurchaseDto.class);
        return purchaseDto;
        //Reservation reservation = mapper.map(dto , Reservation.class);
        //reservation = repo.save(reservation);
        //ReservationDTO reservationDTO = mapper.map(reservation, ReservationDTO.class);
        //return reservationDTO;
    }

    public Purchase update(PurchaseDto dto){
        Purchase purchase = mapper.map(dto, Purchase.class);
        return purchaseRepo.save(purchase);
        //Reservation reservation = mapper.map(dto , Reservation.class);
        //return repo.save(reservation);
    }

    public void delete(Long id){
        purchaseRepo.deleteById(id);
    }

}
