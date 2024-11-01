# Web Application Project

This project is a full-stack web application consisting of an Angular frontend, a Java Spring Boot backend, and a MySQL database. It was developed for the course **Project: Java and Web Development**, which is part of the Computer Science curriculum at IU International University.

## Project description

The Flashcard APP was developed with the purpose of supporting language learners who are actively expanding their vocabulary through interactive flashcards, which allow users to:
- review terms and their translations,
- see their use in sentences and
- see the grammatical article of nouns.

By creating, managing and organizing flashcards in folders and having separate spaces for different modes of study, the tool attempts to make language learning more systematic and manageable.

## Technology choices

The main purpose of the technology selections was to leverage the students' preexisting skills.
- MySQL was chosen for the database for being widely used and providing accessible resources for learning.
- Angular was selected for the SPA because of its component-based architecture, which simplifies dynamic content development.
- Java and the Spring Boot framework were chosen for the API because they provide robust support for HTTP requests, simple integration with MySQL, and platform independence through built-in server capabilities and reusable configurations.​

## Installation and run instructions

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [Java JDK 11 or above](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Maven](https://maven.apache.org/)
- [MySQL](https://dev.mysql.com/downloads/mysql/)

### Clone the repository
```bash
git clone git@github.com:dudamirandaa/flashcardapp.git
```

### Database Setup

Import the sample SQL files provided:

1. Navigate to the database directory:
    ```bash
    cd flashcardapp/database-config
    ```

1. Create the database and tables:
    ```bash
    mysql -u root -p < create-tables.sql
    ```

2. Insert sample data:
    ```bash
    mysql -u root -p < sample-data.sql
    ```

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd flashcardapp/flashcardapp-backend
    ```

2. Configure the database connection in `application.properties`:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/flashcards?serverTimezone=Europe/Berlin
    spring.datasource.username=<yourusername>
    spring.datasource.password=<yourpassword>
    ```

3. Build and run the backend:
    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd flashcardapp/flashcardapp-frontend/angular-flashcardapp
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the Angular development server:
    ```bash
    ng serve
    ```

    The frontend will be available at `http://localhost:4200/`.

### Running the Application

1. Ensure that MySQL is running.
2. Start the backend using the instructions above.
3. Start the frontend using the instructions above.
4. Open your browser and navigate to `http://localhost:4200/` to access the application.

## How to use

You can find a recording with explanations on navigating the application here:

[Navigating the application](https://github.com/dudamirandaa/flashcardapp/raw/main/docs_phase3/Phase%203%20screencast.mp4)

## Test cases

The following table shows how the application should respond to actions performed through the interface:

| Action |  Outcome |
|:-----:|:--------:|
| General |
| Navigating to http://localhost:4200/ | The welcome page should be shown |
| Clicking on Flashcard app in the navigation bar |  The welcome page should be shown  |
| Clicking on Folders in the navigation bar | The list of folders should be shown |
| Folders page |
| Clicking on the Add folder button | The card with a form for adding a new folder should be toggled (alternately expanded and collapsed) |
| Typing in the Folder name field | The Add folder button inside the card should be activated |
| Clicking on the Add folder button inside the card | Shold send the form and reload the page, showing the folders list, including the newly added folder |
| Clicking on the View button in the folder list | The list of flashcards and the card for adding new flashcards should be shown |
| Clicking the Study genders button | Should navigate to the study genders view |
| Clicking the Study button | Should navigate to the study view |
| Flashcards page |
| Typing in the Word and Translation fields | The Add flashcard button inside the card should be activated |
| Clicking on the Add flashcard button inside the card | Shold send the form and reload the page, showing the flashcard list, including the newly added flashcard |
| Study genders section |
| Clicking on the Check answer button | Should toggle the article corresponding to the word |
| Clicking on the Next button | Should show the next word |
| Study section	|
| Clicking on the word | Should alternate between showing the translation and the word |
| Clicking the View example sentence button | Should show toggle showing the example sentence corresponding to the word |
| Clicking on the Next button | Should show the next word |
