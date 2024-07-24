package com.zephyr.projectmanager.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zephyr.projectmanager.models.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    public Project findByName(String name);

    public Project getById(Long id);

    public List<Project> findAll();
}