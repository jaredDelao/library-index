import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriaPruebaComponent } from './libreria-prueba.component';

describe('LibreriaPruebaComponent', () => {
  let component: LibreriaPruebaComponent;
  let fixture: ComponentFixture<LibreriaPruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibreriaPruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibreriaPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
