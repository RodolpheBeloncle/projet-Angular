import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParCategorieComponent } from './recherche-par-categorie.component';

describe('RechercheParCategorieComponent', () => {
  let component: RechercheParCategorieComponent;
  let fixture: ComponentFixture<RechercheParCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheParCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
