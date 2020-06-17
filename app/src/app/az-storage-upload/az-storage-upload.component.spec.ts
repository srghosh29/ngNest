import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzStorageUploadComponent } from './az-storage-upload.component';

describe('AzStorageUploadComponent', () => {
  let component: AzStorageUploadComponent;
  let fixture: ComponentFixture<AzStorageUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzStorageUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzStorageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
