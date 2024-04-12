package com.saraya.repository;

import com.saraya.model.Customers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustommerRepo extends JpaRepository<Customers,Long> {
}
