package com.saraya.controller;


import com.saraya.dto.CustomerDto;
import com.saraya.exception.ResourceNotFoundException;
import com.saraya.model.Customers;
import com.saraya.repository.CustommerRepo;
import com.saraya.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    private CustommerRepo customerRepo;
    @Autowired
    private CustomerService customerService;

    @GetMapping
    public List<Customers> getAll(){
        return customerService.getAll();
    }

    @PostMapping("/create")
    public CustomerDto create(@RequestBody CustomerDto customer){
        return customerService.create(customer);
    }

    @PutMapping("/update/{id}")
    public Customers update(@PathVariable Long id, @RequestBody CustomerDto dto){
        return customerService.update(dto);
    }

    @GetMapping("/{id}")
    public Customers getIdCustomer(@PathVariable Long id){
        Customers customers = customerRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Booking not exist with id:"+id));
        return customers;
    }
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id){
        customerService.delete(id);
    }
}
