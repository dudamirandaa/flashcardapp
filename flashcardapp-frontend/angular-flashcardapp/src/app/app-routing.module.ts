import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { FolderComponent } from './folder/folder.component';
import { StudyComponent } from './study/study.component';

const routes: Routes = [
  {
    path: 'flashcards/:folderId',
    component: FlashcardsComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'study/:folderId',
    component: StudyComponent
  },
  {
    path: 'folders',
    component: FolderComponent,
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
