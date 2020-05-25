import { TestBed } from '@angular/core/testing';

import { LibreriaPruebaService } from './libreria-prueba.service';

describe('LibreriaPruebaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibreriaPruebaService = TestBed.get(LibreriaPruebaService);
    expect(service).toBeTruthy();
  });
});
