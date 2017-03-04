CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  ID integer primary key,
  username integer,
  messageBody text,
  roomname integer,
  FOREIGN KEY(username) REFERENCES usernames(id),
  FOREIGN KEY(roomname) REFERENCES roomnames(id)


);

/* Create other tables and define schemas for them here! */

CREATE TABLE roomnames (
  /* Describe your table here.*/
  ID integer primary key,
  roomname text


);

CREATE TABLE usernames (
  /* Describe your table here.*/
  ID integer primary key,
  username text


);

CREATE TABLE usernames_roomnames (
  /* Describe your table here.*/
  ID integer primary key,
  username integer,
  roomname integer,
  FOREIGN KEY(username) REFERENCES usernames(id),
  FOREIGN KEY(roomname) REFERENCES roomnames(id)


);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

