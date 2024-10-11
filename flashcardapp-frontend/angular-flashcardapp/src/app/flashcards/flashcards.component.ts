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
        translation: ["", Validators.required]
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
      console.log("reloades flashcards" + flashcards)
    })
  }

  addFlashcard() {
    if (this.addFlashcardForm.valid) {
      this.flashcardsService.addFlashcard(this.createFlashcard());
    }
  }

  createFlashcard(): AddFlashcardDTO {
    return {
      word: this.addFlashcardForm.get('word')?.value,
      translation: this.addFlashcardForm.get('translation')?.value,
      gender: this.addFlashcardForm.get('gender')?.value,
      wordClass: this.addFlashcardForm.get('wordClass')?.value,
      exampleSentence: this.addFlashcardForm.get('exampleSentence')?.value,
      folderId: Number(this.folderId)
    }
  }
}
