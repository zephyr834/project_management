package com.zephyr.projectmanager.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zephyr.projectmanager.models.User;
import com.zephyr.projectmanager.repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createNewUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public User findUserById(Long id) {
        return userRepository.getById(id);
    }

    public List<User> findUserByFirstName(String firstName) {
        return userRepository.findByFirstName(firstName);
    }

    public List<User> findUserByLastName(String lastName) {
        return userRepository.findByLastName(lastName);
    }

    public List<User> findUserByRole(int role) {
        return userRepository.findByRole(role);
    }

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void deleteUser(User user) {
        userRepository.delete(user);
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }
}
