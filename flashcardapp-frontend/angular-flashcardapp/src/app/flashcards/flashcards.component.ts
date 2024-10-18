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

  ngOnInit(): void {
      this.route.paramMap.subscribe(param => {
        this.folderId = param.get('folderId');

        if (this.folderId) {
          this.listFlashcardsByFolder(Number(this.folderId));
        }
        else {
          this.listFlashcards();
        }
      });
      
      this.addFlashcardForm = this.formBuilder.group({
        word: ["", Validators.required],
        translation: ["", Validators.required],
        gender: [""],
        wordClass: [""],
        exampleSentence: [""]
      })
  }

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

  formatNullENUM(field: string): string | null {
    let value = this.getFormValue(field) == "" ? null : this.getFormValue(field)
    return value;
  }

  getFormValue(field: string): string {
    return this.addFlashcardForm.get(field)?.value;
  }
}
