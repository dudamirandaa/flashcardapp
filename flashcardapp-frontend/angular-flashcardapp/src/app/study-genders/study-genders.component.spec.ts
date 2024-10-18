import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyGendersComponent } from './study-genders.component';

describe('StudyGendersComponent', () => {
  let component: StudyGendersComponent;
  let fixture: ComponentFixture<StudyGendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyGendersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyGendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
