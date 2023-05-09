import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravailleurCardComponent } from './travailleur-card.component';

describe('TravailleurCardComponent', () => {
  let component: TravailleurCardComponent;
  let fixture: ComponentFixture<TravailleurCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravailleurCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravailleurCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
