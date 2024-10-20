// This object allows for populating the form when updating a flashcard
export interface UpdateFlashcardDTO {
    word: string;
    translation: string;
    gender: string | null;
    wordClass: string | null;
    exampleSentence: string;
    folderId: number;
}