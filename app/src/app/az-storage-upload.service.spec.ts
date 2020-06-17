import { TestBed } from '@angular/core/testing';

import { AzStorageUploadService } from './az-storage-upload.service';

describe('AzStorageUploadService', () => {
  let service: AzStorageUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzStorageUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
