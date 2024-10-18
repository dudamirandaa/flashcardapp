package com.example.flashcardapp.flashcard;

import com.example.flashcardapp.model.Flashcard;
import org.springframework.data.repository.CrudRepository;

public interface FlashcardRepository extends CrudRepository<Flashcard, Long> {
    public Iterable<Flashcard> findByFolderId(Long folderId);
}
