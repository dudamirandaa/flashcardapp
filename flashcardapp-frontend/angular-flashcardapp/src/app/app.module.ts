import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FolderComponent } from './folder/folder.component';
import { StudyComponent } from './study/study.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudyGendersComponent } from './study-genders/study-genders.component';
import { GreetingsComponent } from './greetings/greetings.component';

// This class defines which components belong to the module,
// import other modules that the components need, and provides services
// the components can use
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FlashcardsComponent,
    FolderComponent,
    StudyComponent,
    StudyGendersComponent,
    GreetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
