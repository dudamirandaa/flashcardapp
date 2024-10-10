import { Component } from '@angular/core';
import { Flashcard } from '../flashcard';
import { FlashcardsService } from './flashcards.service';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.css'
})
export class FlashcardsComponent {
  flashcards: Flashcard[] = [];

  constructor(
    private flashcardsService: FlashcardsService
  ) {}

  ngOnInit(): void {
    this.listFlashcards();
  }

  async listFlashcards() {
    await this.flashcardsService.getFlashcards().subscribe((flashcards) => {
      this.flashcards = flashcards;
    })
  }
}
