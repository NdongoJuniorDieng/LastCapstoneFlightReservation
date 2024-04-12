package com.saraya.controller;

import com.saraya.exception.ResourceNotFoundException;
import com.saraya.model.Booking;
import com.saraya.repository.BookingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/booking")
public class BookingController {
    @Autowired
    private BookingRepo bookingRepo;

    @GetMapping
    public List<Booking> getAll(){
        return bookingRepo.findAll();
    }

    @PostMapping("/create")
    public Booking createBooking(@RequestBody Booking booking){
        return bookingRepo.save(booking);
    }

    @GetMapping("/{id}")
    public Booking getBookingById(@PathVariable Long id){
        Booking booking = bookingRepo.findById(id).orElseThrow();
        return booking;
    }

    @PutMapping("/update/{id}")
    public Booking updateBooking(@PathVariable Long id,@RequestBody Booking bookingDetail){
        Booking booking = bookingRepo.findById(id).orElseThrow();

        booking.setAirline(bookingDetail.getAirline());
        booking.setAirport(bookingDetail.getAirport());
        booking.setArrivalAirport(bookingDetail.getArrivalAirport());
        booking.setDeparture(bookingDetail.getDeparture());
        booking.setArrival(bookingDetail.getArrival());
        booking.setDuration(bookingDetail.getDuration());
        booking.setPrice(bookingDetail.getPrice());
        booking.setFlightNo(bookingDetail.getFlightNo());

        Booking bookingUpdt = bookingRepo.save(booking);
        return bookingUpdt;
    }

    @DeleteMapping("/delete/{id}")
    public void deletebooking(@PathVariable Long id){
        bookingRepo.deleteById(id);
    }
}



