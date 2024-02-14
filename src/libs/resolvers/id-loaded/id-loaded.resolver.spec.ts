import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { idLoadedResolver } from './id-loaded.resolver';

describe('idLoadedResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => idLoadedResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
