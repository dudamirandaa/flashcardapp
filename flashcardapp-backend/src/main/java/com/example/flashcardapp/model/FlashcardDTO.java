package com.example.flashcardapp.model;

// This class allows JSON objects received through HTTP requests to be
// transformed into Flashcard objects that will be inserted into the database
public class FlashcardDTO {

    private String word;

    private String translation;

    private Gender gender;

    private WordClass wordClass;

    private State state;

    private String exampleSentence;

    private Long folderId;

    public FlashcardDTO() {
    }

    public FlashcardDTO(String word, String translation, Gender gender, WordClass wordClass, State state, String exampleSentence, Long folderId) {
        this.word = word;
        this.translation = translation;
        this.gender = gender;
        this.wordClass = wordClass;
        this.state = state;
        this.exampleSentence = exampleSentence;
        this.folderId = folderId;
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

    // This method transforms the JSON object received through an HTTP request
    // into a Flashcard object, setting the state to unfamiliar in case the user
    // didn't specify a state while creating
    public Flashcard toFlashcard() {
        Flashcard flashcard = new Flashcard();
        flashcard.setWord(word);
        flashcard.setTranslation(translation);
        flashcard.setGender(gender);
        flashcard.setWordClass(wordClass);
        if (state == null) {
            flashcard.setState(State.unfamiliar);
        } else {
            flashcard.setState(state);
        }
        flashcard.setExampleSentence(exampleSentence);
        flashcard.setFolderId(folderId);
        return flashcard;
    }

    // This method allows Flashcard entries on the database to be updated
    // according to the information received through a JSON object,
    // and changes only the fields given by the user
    public Flashcard updateFlashcard(Flashcard flashcard) {
        if (getWord() != null) {
            flashcard.setWord(getWord());
        };
        if (getTranslation() != null) {
            flashcard.setTranslation(getTranslation());
        };
        if (getGender() != null) {
            flashcard.setGender(getGender());
        };
        if (getWordClass() != null) {
            flashcard.setWordClass(getWordClass());
        };
        if (getState() != null) {
            flashcard.setState(getState());
        };
        if (getExampleSentence() != null) {
            flashcard.setExampleSentence(getExampleSentence());
        };
        if (getFolderId() != null) {
            flashcard.setFolderId(getFolderId());
        };
        return flashcard;
    }
}
