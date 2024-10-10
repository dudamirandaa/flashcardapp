import { Flashcard } from './../flashcard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {

  constructor(private http: HttpClient) { }

  getFlashcards() {
    // console.log(this.http.get<Flashcard[]>('http://localhost:8080/flashcards'));
    return this.http.get<Flashcard[]>('/api/flashcards');
  }
}