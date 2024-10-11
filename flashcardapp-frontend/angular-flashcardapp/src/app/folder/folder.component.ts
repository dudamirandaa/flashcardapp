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

  ngOnInit(): void {
    this.listFolders();

    this.addFolderForm = this.formBuilder.group({
      folderName: ["", Validators.required]
    })
  }

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

  onViewClick(folderId: number) {
    this.router.navigate([`/flashcards`, folderId])
  }

  onStudyClick(folderId: number) {
    this.router.navigate([`/study`, folderId])
  }

  toggleAddFolderForm() {
    this.showAddFolderForm = !this.showAddFolderForm;
  }

  createFolder(): AddFolderDTO {
    return {
      folderName: this.addFolderForm.get('folderName')?.value
    }
  }
}
