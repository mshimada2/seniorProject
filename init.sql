CREATE DATABASE animecharacters;

USE animecharacters;

CREATE TABLE info ( 
id INT AUTO_INCREMENT,
name VARCHAR(255),
anime VARCHAR(255),
rating INT,
PRIMARY KEY (id));

INSERT INTO info SET name = "Naruto Uzumaki", anime = "Naruto", rating = 0;

INSERT INTO info SET name = "Sasuke Uchiha", anime = "Naruto", rating = 0;

INSERT INTO info SET name = "Yugi Moto", anime = "Yu-Gi-Oh", rating = 0;

INSERT INTO info SET name = "Monkey D. Luffy", anime = "One Piece", rating = 0;

INSERT INTO info SET name = "Roronoa Zoro", anime = "One Piece", rating = 0;

INSERT INTO info SET name = "Goku", anime = "Dragon Ball Z", rating = 0;

INSERT INTO info SET name = "Piccolo", anime = "Dragon Ball Z", rating = 0;

INSERT INTO info SET name = "Light Yagami", anime = "Death Note", rating = 0;

CREATE TABLE users ( 
id INT AUTO_INCREMENT,
name VARCHAR(255),
PRIMARY KEY (id) );

INSERT INTO users SET name = "Judy";
INSERT INTO users SET name = "Mick";
INSERT INTO users SET name = "Cameron";

