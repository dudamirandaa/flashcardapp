package com.example.flashcardapp.flashcard;

import com.example.flashcardapp.model.Flashcard;
import com.example.flashcardapp.model.FlashcardDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

// This class implements all functionality related to flashcards
@Service
public class FlashcardService {

    @Autowired
    private FlashcardRepository flashcardRepository;

    public Iterable<Flashcard> findAll() {
        return flashcardRepository.findAll();
    }

    // This method implements the functionality to return all flashcards in a given folder
    public Iterable<Flashcard> findByFolder(Long folderId) {
        return flashcardRepository.findByFolderId(folderId);
    }

    public Optional<Flashcard> findFlashcard(Long id) {
        return flashcardRepository.findById(id);
    }

    public Flashcard save(FlashcardDTO flashcardDTO) {
        return flashcardRepository.save(flashcardDTO.toFlashcard());
    }

    // This method implements the functionality to update a given flashcard,
    // if it exists in the database
    public Optional<Flashcard> update(Long id, FlashcardDTO flashcardDTO) {
        Optional<Flashcard> flashcard = flashcardRepository.findById(id);
        flashcard.ifPresent(flashcard1 -> {
            flashcard1 = flashcardDTO.updateFlashcard(flashcard1);
            flashcardRepository.save(flashcard1);
        });
        return flashcard;
    }

    public void delete(Long id) {
        Optional<Flashcard> flashcard = flashcardRepository.findById(id);
        flashcard.ifPresent(flashcardRepository::delete);
    }
}
