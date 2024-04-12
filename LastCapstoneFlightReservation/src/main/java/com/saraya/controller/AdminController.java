package com.saraya.controller;

import com.saraya.exception.ResourceNotFoundException;
import com.saraya.model.Admin;
import com.saraya.repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    AdminRepo adminRepo;
    @GetMapping
    public List<Admin> getAll(){
        return adminRepo.findAll();
    }

    @PostMapping("/createAdmin")
    public Admin createAdmin(@RequestBody Admin admin){
        return adminRepo.save(admin);
    }

    @PutMapping("/updtAdmin/{id}")
    public Admin updtAdmin(@PathVariable Long id,@RequestBody Admin adminDetail){
        Admin admin = adminRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Admin not exist with id:"+id));
        admin.setFirstName(adminDetail.getFirstName());
        admin.setLastName(adminDetail.getLastName());
        admin.setUsername(adminDetail.getUsername());
        admin.setPassword(adminDetail.getPassword());
        Admin adminupdt = adminRepo.save(admin);
        return adminupdt;
    }
    @DeleteMapping("/deleteAdmin/{id}")
    public void delete(@PathVariable Long id){
        adminRepo.deleteById(id);
    }

}
