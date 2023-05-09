import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravailleurFormComponent } from './travailleur-form.component';

describe('TravailleurFormComponent', () => {
  let component: TravailleurFormComponent;
  let fixture: ComponentFixture<TravailleurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravailleurFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravailleurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
