package com.saraya.controller;

import com.saraya.dto.PurchaseDto;
import com.saraya.exception.ResourceNotFoundException;
import com.saraya.model.Purchase;
import com.saraya.repository.PurchaseRepo;
import com.saraya.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/purchase")

public class PurchaseController {
    @Autowired
    private PurchaseService purchaseService;
    @Autowired
    private PurchaseRepo purchaseRepo;

    @GetMapping
    public List<Purchase> getAll(){
       return purchaseService.getAll();
    }

    @PostMapping("/create")
    public PurchaseDto create(@RequestBody PurchaseDto purchase){
        return purchaseService.create(purchase);
    }

    @GetMapping("/{id}")
    public Purchase getPurchaseById(Long id){
        Purchase purchase = purchaseRepo.findById(id).
                orElseThrow(() ->new ResourceNotFoundException("Purchase is not exist with id : "+ id) );
        return purchase;
    }

    @PutMapping("/update/{id}")
    public Purchase update(@PathVariable Long id,@RequestBody PurchaseDto dto){
       return purchaseService.update(dto);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id){
        purchaseService.delete(id);
    }
}
