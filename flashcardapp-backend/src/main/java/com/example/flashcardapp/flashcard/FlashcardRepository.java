package com.example.flashcardapp.flashcard;

import com.example.flashcardapp.model.Flashcard;
import org.springframework.data.repository.CrudRepository;

// This interface provides methods for making queries to the database on the Flashcards table
public interface FlashcardRepository extends CrudRepository<Flashcard, Long> {

    // This method returns all flashcards on a given folder
    public Iterable<Flashcard> findByFolderId(Long folderId);
}
