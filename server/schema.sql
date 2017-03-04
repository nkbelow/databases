CREATE DATABASE chat;

USE chat;

CREATE TABLE roomnames (
  /* Describe your table here.*/
  ID integer primary key AUTO_INCREMENT,
  roomname text


);

CREATE TABLE usernames (
  /* Describe your table here.*/
  ID integer primary key AUTO_INCREMENT,
  username text


);

CREATE TABLE messages (
  /* Describe your table here.*/
  ID integer primary key AUTO_INCREMENT,
  username text,
  messageBody text,
  roomname text
  -- FOREIGN KEY(username) REFERENCES usernames(id),
  -- FOREIGN KEY(roomname) REFERENCES roomnames(id)


);

INSERT INTO messages (username, messageBody, roomname) VALUES 
  ('batman', 'i am batman', 'batcave'), ('joker', 'HAHAHA', 'arkham asylum'),
  ('allen', 'seventythreeee', 'vietnam');
/* Create other tables and define schemas for them here! */



CREATE TABLE usernames_roomnames (
  /* Describe your table here.*/
  ID integer primary key AUTO_INCREMENT,
  username integer,
  roomname integer,
  FOREIGN KEY(username) REFERENCES usernames(id),
  FOREIGN KEY(roomname) REFERENCES roomnames(id)


);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

