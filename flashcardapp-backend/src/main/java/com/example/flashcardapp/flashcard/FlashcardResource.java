package com.example.flashcardapp.flashcard;

import com.example.flashcardapp.model.Flashcard;
import com.example.flashcardapp.model.FlashcardDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

// This class handles HTTP requests made to the path /flashcards
@RestController
@RequestMapping("/flashcards")
public class FlashcardResource {

    @Autowired
    private FlashcardService flashcardService;

    @GetMapping()
    private Iterable<Flashcard> getAll() {
        return flashcardService.findAll();
    }

    // This is the endpoint for returning all flashcards in a given folder
    @GetMapping("/folder/{folderId}")
    private Iterable<Flashcard> getByFolder(@PathVariable Long folderId) {
        return flashcardService.findByFolder(folderId);
    }

    @GetMapping("/{id}")
    private Optional<Flashcard> getFlashcard(@PathVariable Long id) {
        return flashcardService.findFlashcard(id);
    }

    @PostMapping
    private Flashcard newFlashcard(@RequestBody FlashcardDTO flashcardDTO) {
        return flashcardService.save(flashcardDTO);
    }

    @PutMapping("/{id}")
    private Optional<Flashcard> update(@PathVariable Long id, @RequestBody FlashcardDTO flashcardDTO) {
        return flashcardService.update(id, flashcardDTO);
    }

    @DeleteMapping("/{id}")
    private void delete(@PathVariable Long id) {
        flashcardService.delete(id);
    }
}
