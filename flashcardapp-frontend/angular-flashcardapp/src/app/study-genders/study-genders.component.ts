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
      this.flashcards = flashcards.filter(flashcard => flashcard.wordClass === 'noun');

      if(this.flashcards.length > 0) {
        this.currentFlashcard = this.flashcards[this.currentIndex];
      }
    })
  }

  // This method handles the collapsing and expanding of the grammatical gender for the given word
  toggleCheckAnswer() {
    this.checkAnswer = !this.checkAnswer;
  }

  // This method handles the iterations through all flashcards in the folder and reinitializes
  // the toggles for word and translation and example sentence
  nextItem(): void {
    if (this.currentIndex < this.flashcards.length - 1) {
      this.currentIndex++;
      this.currentFlashcard = this.flashcards[this.currentIndex];
    }
    if (this.checkAnswer) {
      this.toggleCheckAnswer();
    }
  }

  // This method handles navigation to the view for adding new flashcards
  addFlashcards(folderId: string | null): void {
    this.router.navigate([`/flashcards`, folderId])
  }
}
