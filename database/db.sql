-- creating database
CREATE DATABASE crudtodolist;

-- using the database
use crudtodolist;

-- create a table
CREATE TABLE tasks(
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
task VARCHAR(50) NOT NULL
);

-- show all tables
show tables;

-- describe tasks
describe tasks;
