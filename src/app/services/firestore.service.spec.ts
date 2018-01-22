import { TestBed, inject } from '@angular/core/testing';

import { AfFirestoreService } from './af-firestore.service';

describe('AfFirestoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfFirestoreService]
    });
  });

  it('should be created', inject([AfFirestoreService], (service: AfFirestoreService) => {
    expect(service).toBeTruthy();
  }));
});
