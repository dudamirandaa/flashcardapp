export interface Flashcard {
    id: number;
    word: string;
    translation: string;
    gender: string;
    wordClass: string;
    state: string;
    exampleSentence: string;
    folderId: number;
}