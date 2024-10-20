package com.example.flashcardapp.model;

// This class allows JSON objects received through HTTP requests to be
// transformed into Folder objects that will be inserted into the database
public class FolderDTO {

    private String folderName;

    public FolderDTO() {
    }

    public FolderDTO(String folderName) {
        this.folderName = folderName;
    }

    public String getFolderName() {
        return folderName;
    }

    public void setFolderName(String folderName) {
        this.folderName = folderName;
    }

    // This method transforms the JSON object received through an HTTP request
    // into a Folder object
    public Folder toFolder() {
        Folder folder = new Folder();
        folder.setFolderName(this.getFolderName());
        return folder;
    }
}
