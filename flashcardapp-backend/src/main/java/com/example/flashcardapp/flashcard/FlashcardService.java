package com.example.flashcardapp.flashcard;

import com.example.flashcardapp.model.Flashcard;
import com.example.flashcardapp.model.FlashcardDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FlashcardService {

    @Autowired
    private FlashcardRepository flashcardRepository;

    public Iterable<Flashcard> findAll() {
        return flashcardRepository.findAll();
    }

    public Iterable<Flashcard> findByFolder(Long folderId) {
        return flashcardRepository.findByFolderId(folderId);
    }

    public Optional<Flashcard> findFlashcard(Long id) {
        return flashcardRepository.findById(id);
    }

    public Flashcard save(FlashcardDTO flashcardDTO) {
        return flashcardRepository.save(flashcardDTO.toFlashcard());
    }

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
