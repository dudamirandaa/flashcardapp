package com.example.flashcardapp.folder;

import com.example.flashcardapp.model.Folder;
import org.springframework.data.repository.CrudRepository;

// This interface provides methods for making queries to the database on the Folders table
public interface FolderRepository extends CrudRepository<Folder, Long> {
}
