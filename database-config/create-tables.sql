CREATE DATABASE flashcards;
USE flashcards;
CREATE TABLE folders (
	id bigint PRIMARY KEY AUTO_INCREMENT,
	folder varchar(255) NOT NULL
);
CREATE TABLE flashcards (
	id bigint PRIMARY KEY AUTO_INCREMENT,
	word varchar(255) NOT NULL,
    translation varchar(255) NOT NULL,
    gender varchar(255),
    word_class varchar(255),
    state varchar(255),
    example_sentence varchar(255),
    folder_id bigint,
    FOREIGN KEY (folder_id) REFERENCES folders(id)
);