import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravailleurDetailsComponent } from './travailleur-details.component';

describe('TravailleurDetailsComponent', () => {
  let component: TravailleurDetailsComponent;
  let fixture: ComponentFixture<TravailleurDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravailleurDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravailleurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
