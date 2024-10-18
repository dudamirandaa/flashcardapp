import { Component } from '@angular/core';
import { Flashcard } from '../model/flashcard';
import { FlashcardsService } from '../flashcards.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-study-genders',
  templateUrl: './study-genders.component.html',
  styleUrl: './study-genders.component.css'
})
export class StudyGendersComponent {
  flashcards: Flashcard[] = [];
  folderId: string | null = null;
  currentFlashcard: Flashcard | null = null;
  currentIndex: number = 0;
  checkAnswer = false;

  constructor(
    private flashcardsService: FlashcardsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.folderId = this.route.snapshot.paramMap.get('folderId');
    this.listFlashcardsByFolder(Number(this.folderId));
  }

  async listFlashcardsByFolder(id: number) {
    await this.flashcardsService.getFlashcardsByFolder(id).subscribe((flashcards) => {
      this.flashcards = flashcards.filter(flashcard => flashcard.wordClass === 'noun');

      if(this.flashcards.length > 0) {
        this.currentFlashcard = this.flashcards[this.currentIndex];
      }
    })
  }

  toggleCheckAnswer() {
    this.checkAnswer = !this.checkAnswer;
  }

  nextItem(): void {
    if (this.currentIndex < this.flashcards.length - 1) {
      this.currentIndex++;
      this.currentFlashcard = this.flashcards[this.currentIndex];
    }
    if (this.checkAnswer) {
      this.toggleCheckAnswer();
    }
  }

  addFlashcards(folderId: string | null): void {
    this.router.navigate([`/flashcards`, folderId])
  }
}
