package com.example.flashcardapp.model;

import jakarta.persistence.*;

@Entity
@Table(name = "flashcards")
public class Flashcard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String word;

    @Column(nullable = false)
    private String translation;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Enumerated(EnumType.STRING)
    @Column(name = "word_class")
    private WordClass wordClass;

    @Enumerated(EnumType.STRING)
    private State state;

    @Column(name = "example_sentence")
    private String exampleSentence;

    @Column(name = "folder_id", nullable = false)
    private Long folderId;

    public Flashcard() {
    }

    public Flashcard(Long id, String word, String translation, Gender gender, WordClass wordClass, State state, String exampleSentence, Long folderId) {
        this.id = id;
        this.word = word;
        this.translation = translation;
        this.gender = gender;
        this.wordClass = wordClass;
        this.state = state;
        this.exampleSentence = exampleSentence;
        this.folderId = folderId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public String getTranslation() {
        return translation;
    }

    public void setTranslation(String translation) {
        this.translation = translation;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public WordClass getWordClass() {
        return wordClass;
    }

    public void setWordClass(WordClass wordClass) {
        this.wordClass = wordClass;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public String getExampleSentence() {
        return exampleSentence;
    }

    public void setExampleSentence(String exampleSentence) {
        this.exampleSentence = exampleSentence;
    }

    public Long getFolderId() {
        return folderId;
    }

    public void setFolderId(Long folderId) {
        this.folderId = folderId;
    }
}
