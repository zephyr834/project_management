package com.zephyr.projectmanager.controllers;

import java.net.URISyntaxException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zephyr.projectmanager.models.Project;
import com.zephyr.projectmanager.services.ProjectService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    private final Logger log = LoggerFactory.getLogger(ProjectController.class);
    @Autowired
    private ProjectService projectService;

    @GetMapping("/")
    List<Project> projects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProject(@PathVariable Long id) {
        return ResponseEntity.ok(projectService.findProjectById(id));
    }

    @PostMapping("/")
    public ResponseEntity<Project> createProject(@Valid @RequestBody Project project) throws URISyntaxException {
        log.info("Request to create project: {}", project);
        return ResponseEntity.ok(projectService.createNewProject(project));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Project> updateProject(@Valid @RequestBody Project project) {
        log.info("Request to update project: {}", project);
        return ResponseEntity.ok(projectService.updateProject(project));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteProject(@PathVariable Long id) {
        log.info("Request to delete project: {}", id);
        projectService.deleteById(id);
        return ResponseEntity.ok(true);
    }

}