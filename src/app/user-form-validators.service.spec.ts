import { TestBed } from '@angular/core/testing';

import { UserFormValidatorsService } from './user-form-validators.service';

describe('UserFormValidatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFormValidatorsService = TestBed.get(UserFormValidatorsService);
    expect(service).toBeTruthy();
  });
});
