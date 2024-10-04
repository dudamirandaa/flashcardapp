package com.example.flashcardapp.model;

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

    public Folder toFolder() {
        Folder folder = new Folder();
        folder.setFolderName(this.getFolderName());
        return folder;
    }
}
