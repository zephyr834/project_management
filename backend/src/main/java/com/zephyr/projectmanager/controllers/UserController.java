package com.zephyr.projectmanager.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.zephyr.projectmanager.models.User;
import com.zephyr.projectmanager.services.UserService;

@Controller
@RequestMapping("/api/v1/users")

public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUser());
    }

    @GetMapping("/role/{roleId}")
    public ResponseEntity<List<User>> getAllUsersByRole(@PathVariable int roleId) {
        return ResponseEntity.ok(userService.findUserByRole(roleId));
    }

    @GetMapping("/email")
    public ResponseEntity<User> getUserByEmail(@RequestBody String email) {
        return ResponseEntity.ok(userService.findUserByEmail(email));
    }

    @GetMapping("/firstName/{firstName}")
    public ResponseEntity<List<User>> getUserByFirstName(@PathVariable String firstName) {
        return ResponseEntity.ok(userService.findUserByFirstName(firstName));
    }

    @GetMapping("/lastName/{lastName}")
    public ResponseEntity<List<User>> getUserByLastName(@PathVariable String lastName) {
        return ResponseEntity.ok(userService.findUserByLastName(lastName));
    }

    @PostMapping("/")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.createNewUser(user));
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        user.setId(id);
        return ResponseEntity.ok(userService.updateUser(user));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> getAllUsers(@PathVariable Long id) {
        userService.deleteUser(userService.findUserById(id));
        return ResponseEntity.ok(true);
    }

}
