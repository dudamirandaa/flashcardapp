import { Component } from '@angular/core';
import { Flashcard } from '../model/flashcard';
import { FlashcardsService } from '../flashcards.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrl: './study.component.css'
})
export class StudyComponent {
  flashcards: Flashcard[] = [];
  folderId: string | null = null;
  currentFlashcard: Flashcard | null = null;
  currentIndex: number = 0;
  wordAndTranslation = false;

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
      this.flashcards = flashcards

      if(this.flashcards.length > 0) {
        this.currentFlashcard = this.flashcards[this.currentIndex];
      }
    })
  }

  toggleWordAndTranslation() {
    this.wordAndTranslation = !this.wordAndTranslation;
    console.log(this.wordAndTranslation)
  }

  nextItem(): void {
    if (this.currentIndex < this.flashcards.length - 1) {
      this.currentIndex++;
      this.currentFlashcard = this.flashcards[this.currentIndex];
    }
  }

  addFlashcards(folderId: string | null): void {
    this.router.navigate([`/flashcards`, folderId])
  }
}
