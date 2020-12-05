import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongDetailedComponent } from './song-detailed.component';

describe('SongDetailedComponent', () => {
  let component: SongDetailedComponent;
  let fixture: ComponentFixture<SongDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
