import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProjetPageComponent } from './details-projet-page.component';

describe('DetailsProjetPageComponent', () => {
  let component: DetailsProjetPageComponent;
  let fixture: ComponentFixture<DetailsProjetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsProjetPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsProjetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
