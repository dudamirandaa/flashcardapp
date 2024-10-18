export interface AddFlashcardDTO {
    word: string;
    translation: string;
    gender: string | null;
    wordClass: string | null;
    exampleSentence: string;
    folderId: number;
}