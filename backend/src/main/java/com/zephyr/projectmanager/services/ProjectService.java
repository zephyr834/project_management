package com.zephyr.projectmanager.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zephyr.projectmanager.models.Project;
import com.zephyr.projectmanager.repositories.ProjectRepository;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public Project createNewProject(Project project) {
        return projectRepository.save(project);
    }

    public void deleteProject(Project project) {
        projectRepository.delete(project);
    }

    public Project updateProject(Project project) {
        return projectRepository.save(project);
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project getProjectByName(String name) {
        return projectRepository.findByName(name);
    }

    public Project findProjectById(Long id) {
        return projectRepository.getById(id);
    }

    public void deleteById(Long id) {
        projectRepository.deleteById(id);
    }
}
