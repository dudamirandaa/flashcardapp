// This object is populated according to the form values when adding a new flashcard
export interface AddFlashcardDTO {
    word: string;
    translation: string;
    gender: string | null;
    wordClass: string | null;
    exampleSentence: string;
    folderId: number;
}