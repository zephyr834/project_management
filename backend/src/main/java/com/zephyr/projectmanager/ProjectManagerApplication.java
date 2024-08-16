package com.zephyr.projectmanager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.config.annotation.CorsRegistration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ProjectManagerApplication {

    @Autowired
    private Environment env;

    public static void main(String[] args) {
        SpringApplication.run(ProjectManagerApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                String urls = env.getProperty("cors.urls");
                CorsRegistration reg = registry.addMapping("/api/**");
                for (String url : urls.split(",")) {
                    reg.allowedOrigins(url);
                }
            }
        };
    }

}
