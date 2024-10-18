import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { FolderComponent } from './folder/folder.component';
import { StudyComponent } from './study/study.component';
import { StudyGendersComponent } from './study-genders/study-genders.component';
import { GreetingsComponent } from './greetings/greetings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/greetings',
    pathMatch: 'full'
  },
  {
    path: 'flashcards/:folderId',
    component: FlashcardsComponent
  },
  {
    path: 'study/:folderId',
    component: StudyComponent
  },
  {
    path: 'study-genders/:folderId',
    component: StudyGendersComponent
  },
  {
    path: 'folders',
    component: FolderComponent
  },
  {
    path: 'greetings',
    component: GreetingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
