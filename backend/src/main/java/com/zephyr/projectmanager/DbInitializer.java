package com.zephyr.projectmanager;

import org.springframework.stereotype.Component;

@Component
public class DbInitializer {

    // private final ProjectRepository projectRepo;

    // public DbInitializer(ProjectRepository projectRepo) {
    // this.projectRepo = projectRepo;
    // this.createMockData();
    // }

    // private void createMockData() {
    // Stream.of("BladeRunner", "Trello").forEach(name -> projectRepo.save(new
    // Project(name)));

    // Project project = projectRepo.findByName("Trello");
    // Task task = Task.builder().task("Hello World!").completed(false).build();
    // project.setTasks(Collections.singleton(task));
    // projectRepo.save(project);

    // }

}
