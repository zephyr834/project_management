package com.zephyr.projectmanager.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zephyr.projectmanager.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    public User findByEmail(String email);

    public List<User> findByFirstName(String firstName);

    public List<User> findByLastName(String lastName);

    public List<User> findByRole(int role);

    public List<User> findAll();

    public User getById(Long id);

}
