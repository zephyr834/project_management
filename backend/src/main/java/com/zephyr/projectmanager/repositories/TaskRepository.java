package com.zephyr.projectmanager.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zephyr.projectmanager.models.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    public Task findByTask(String task);

    public List<Task> findByCompletedTrue();

    public List<Task> findByCompletedFalse();

    public List<Task> findAll();

    public Task getById(Long id);
}
