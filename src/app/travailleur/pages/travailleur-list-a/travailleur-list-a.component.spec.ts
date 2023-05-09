import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravailleurListAComponent } from './travailleur-list-a.component';

describe('TravailleurListAComponent', () => {
  let component: TravailleurListAComponent;
  let fixture: ComponentFixture<TravailleurListAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravailleurListAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravailleurListAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
