import { Component } from '@angular/core';
import { Folder } from '../model/folder';
import { FolderService } from '../folder.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddFolderDTO } from '../model/add-folder-dto';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.css'
})
export class FolderComponent {
  folders: Folder[] = [];
  showAddFolderForm = false;
  addFolderForm!: FormGroup;

  constructor(
    private folderService: FolderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  // Tasks executed everytime the container is initiated
  ngOnInit(): void {
    // Lists all folders saved in the database
    this.listFolders();

    // Constructs a new FormGroup instance for the form for adding a new folder
    this.addFolderForm = this.formBuilder.group({
      folderName: ["", Validators.required]
    })
  }

  // The following methods handle calls for the backend server

  async listFolders() {
    await this.folderService.getFolders().subscribe((folders) => {
      this.folders = folders;
    })
  }

  addFolder() {
    if (this.addFolderForm.valid) {
      this.folderService.addFolder(this.createFolder());
    }
  }

  // This method handles navigation to the list of flashcards related to the given folder
  view(folderId: number) {
    this.router.navigate([`/flashcards`, folderId])
  }

  // This method handles navigation to the view for practicing grammatical gender of words
  studyGenders(folderId: number) {
    this.router.navigate([`/study-genders`, folderId])
  }

  // This method handles navigation to the view for reviewing words
  study(folderId: number) {
    this.router.navigate([`/study`, folderId])
  }

  // This method handles the collapsing and expanding of the card for adding a new folder
  toggleAddFolderForm() {
    this.showAddFolderForm = !this.showAddFolderForm;
  }

  // This method builds an object according to the values of the form for adding a new folder
  createFolder(): AddFolderDTO {
    return {
      folderName: this.addFolderForm.get('folderName')?.value
    }
  }
}
