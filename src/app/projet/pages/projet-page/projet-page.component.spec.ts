import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetPageComponent } from './projet-page.component';

describe('ProjetPageComponent', () => {
  let component: ProjetPageComponent;
  let fixture: ComponentFixture<ProjetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
