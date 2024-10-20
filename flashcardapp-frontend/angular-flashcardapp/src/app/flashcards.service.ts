import { Flashcard } from './model/flashcard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddFlashcardDTO } from './model/add-flashcard-dto';

// This class handles calls to the backend server made for the path /flashcards
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

  addFlashcard(newFlashcard: AddFlashcardDTO) {
    this.http.post<Flashcard>('api/flashcards', newFlashcard).subscribe(() => {
      window.location.reload();
    });
  }

  deleteFlashcard(id: number) {
    this.http.delete<Flashcard>('api/flashcards/' + id).subscribe(() => {
      window.location.reload();
    });
  }
}