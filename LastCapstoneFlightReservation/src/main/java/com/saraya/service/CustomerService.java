package com.saraya.service;

import com.saraya.dto.CustomerDto;
import com.saraya.model.Customers;
import com.saraya.repository.CustommerRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {
    @Autowired
    private CustommerRepo custommerRepo;
    private final ModelMapper mapper;

    public CustomerService(ModelMapper mapper) {
        this.mapper = mapper;
    }

    public List<Customers> getAll(){
        return custommerRepo.findAll();
    }

    public CustomerDto create(CustomerDto dto){
        Customers customers = mapper.map(dto , Customers.class);
        customers = custommerRepo.save(customers);

        CustomerDto customerDto = mapper.map(customers,CustomerDto.class);
        return customerDto;

    }

    public Customers update(CustomerDto dto){
        Customers customers = mapper.map(dto , Customers.class);
        customers = custommerRepo.save(customers);

        return customers ;
    }

    public void delete(Long id){
        custommerRepo.deleteById(id);
    }
}
