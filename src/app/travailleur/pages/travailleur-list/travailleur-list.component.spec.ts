import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravailleurListComponent } from './travailleur-list.component';

describe('TravailleurListComponent', () => {
  let component: TravailleurListComponent;
  let fixture: ComponentFixture<TravailleurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravailleurListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravailleurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
