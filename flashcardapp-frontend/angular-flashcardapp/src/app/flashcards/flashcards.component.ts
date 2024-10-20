import { Component, SimpleChanges } from '@angular/core';
import { Flashcard } from '../model/flashcard';
import { FlashcardsService } from '../flashcards.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddFlashcardDTO } from '../model/add-flashcard-dto';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.css'
})
export class FlashcardsComponent {
  flashcards: Flashcard[] = [];
  folderId: string | null = null;
  addFlashcardForm!: FormGroup;

  constructor(
    private flashcardsService: FlashcardsService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  // Tasks executed everytime the container is initiated
  ngOnInit(): void {
    // Identifies the folderId parameter from the URL and assigns it to the class variable
    this.route.paramMap.subscribe(param => {
      this.folderId = param.get('folderId');

      // Lists all flashcards in a given folder, in the case that a folderId was given in the URL,
      // else list all flashcards saved in the database
      if (this.folderId) {
        this.listFlashcardsByFolder(Number(this.folderId));
      }
      else {
        this.listFlashcards();
      }
    });
    
    // Constructs a new FormGroup instance for the form for adding flashcards
    this.addFlashcardForm = this.formBuilder.group({
      word: ["", Validators.required],
      translation: ["", Validators.required],
      gender: [""],
      wordClass: [""],
      exampleSentence: [""]
    })
  }

  // The following methods handle calls for the backend server

  async listFlashcards() {
    await this.flashcardsService.getFlashcards().subscribe((flashcards) => {
      this.flashcards = flashcards;
    })
  }

  async listFlashcardsByFolder(id: number) {
    await this.flashcardsService.getFlashcardsByFolder(id).subscribe((flashcards) => {
      this.flashcards = flashcards;
    })
  }

  addFlashcard() {
    if (this.addFlashcardForm.valid) {
      this.flashcardsService.addFlashcard(this.createFlashcard());
    }
  }

  deleteFlashcard(id: number) {
    this.flashcardsService.deleteFlashcard(id);
  }

  // This method builds an object according to the values of the form for adding a new flashcard
  createFlashcard(): AddFlashcardDTO {
    return {
      word: this.getFormValue('word'),
      translation: this.getFormValue('translation'),
      gender: this.formatNullENUM('gender'),
      wordClass: this.formatNullENUM('wordClass'),
      exampleSentence: this.getFormValue('exampleSentence'),
      folderId: Number(this.folderId)
    }
  }

  // This method returns null for empty form fields for the ENUM attributes
  formatNullENUM(field: string): string | null {
    let value = this.getFormValue(field) == "" ? null : this.getFormValue(field)
    return value;
  }

  // This method gets the value of a given field of the form for adding flashcards
  getFormValue(field: string): string {
    return this.addFlashcardForm.get(field)?.value;
  }
}
