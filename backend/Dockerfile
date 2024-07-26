# Use the official MySQL image from the Docker Hub
FROM mysql:8.0

# Expose the MySQL port
EXPOSE 3306

# Copy any additional SQL scripts to initialize the database
# Uncomment the line below if you have an initialization script
# COPY ./init.sql /docker-entrypoint-initdb.d/

# By default, the MySQL image runs the entrypoint script that sets up and runs MySQL
# We don't need to change the CMD or ENTRYPOINT unless there's specific customization
