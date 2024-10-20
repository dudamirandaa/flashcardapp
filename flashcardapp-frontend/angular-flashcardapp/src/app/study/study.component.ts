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
  showExampleSentence = false;

  constructor(
    private flashcardsService: FlashcardsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Tasks executed everytime the container is initiated
  ngOnInit(): void {
    // Identifies the folderId parameter from the URL and assigns it to the class variable
    this.folderId = this.route.snapshot.paramMap.get('folderId');

    // Lists all flashcards in the given folder
    this.listFlashcardsByFolder(Number(this.folderId));
  }

  // This method handles the call for the backend server to access all flashcards in the database
  // that are associated to the given folder and, in case there are any, assigns one of them to a
  // variable used for iterating 
  async listFlashcardsByFolder(id: number) {
    await this.flashcardsService.getFlashcardsByFolder(id).subscribe((flashcards) => {
      this.flashcards = flashcards

      if(this.flashcards.length > 0) {
        this.currentFlashcard = this.flashcards[this.currentIndex];
      }
    })
  }

  // This method handles the switching between a word the its translation
  toggleWordAndTranslation() {
    this.wordAndTranslation = !this.wordAndTranslation;
  }

  // This method handles the collapsing and expanding of the example sentence for the given word
  toggleShowExampleSentence() {
    this.showExampleSentence = !this.showExampleSentence;
  }

  // This method handles the iterations through all flashcards in the folder and reinitializes
  // the toggles for word and translation and example sentence
  nextItem(): void {
    if (this.currentIndex < this.flashcards.length - 1) {
      this.currentIndex++;
      this.currentFlashcard = this.flashcards[this.currentIndex];
      if (this.wordAndTranslation) {
        this.toggleWordAndTranslation();
      }
      if (this.showExampleSentence) {
        this.toggleShowExampleSentence();
      }
    }
  }

  // This method handles navigation to the view for adding new flashcards
  addFlashcards(folderId: string | null): void {
    this.router.navigate([`/flashcards`, folderId])
  }
}
