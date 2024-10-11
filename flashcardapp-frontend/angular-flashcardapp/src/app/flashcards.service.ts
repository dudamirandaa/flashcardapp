import { Flashcard } from './model/flashcard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddFlashcardDTO } from './model/add-flashcard-dto';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {

  constructor(private http: HttpClient) {}

  getFlashcards() {
    return this.http.get<Flashcard[]>('/api/flashcards');
  }

  getFlashcardsByFolder(folderId: number) {
    return this.http.get<Flashcard[]>('/api/flashcards/folder/' + folderId);
  }

  getFlashcard(id: number) {
    // return this.http.get<Flashcard>('/api/flashcards/' + id);
  }

  addFlashcard(newFlashcard: AddFlashcardDTO) {
    this.http.post<Flashcard>('api/flashcards', newFlashcard).subscribe(() => {
      window.location.reload();
    });
  }

  updateFlashcard() {

  }

  deleteFlashcard() {

  }
}