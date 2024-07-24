package com.zephyr.projectmanager.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zephyr.projectmanager.models.Task;
import com.zephyr.projectmanager.repositories.TaskRepository;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public Task createNewTask(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> getAllTask() {
        return taskRepository.findAll();
    }

    public Task findTaskById(Long id) {
        return taskRepository.getById(id);
    }

    public List<Task> findAllCompletedTask() {
        return taskRepository.findByCompletedTrue();
    }

    public List<Task> findAllIncompletedTask() {
        return taskRepository.findByCompletedFalse();
    }

    public void deleteTask(Task task) {
        taskRepository.delete(task);
    }

    public Task updateTask(Task task) {
        return taskRepository.save(task);
    }
}
