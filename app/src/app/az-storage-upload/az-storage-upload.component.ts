import { Component, OnInit } from '@angular/core';

import { AzStorageUploadService } from '../az-storage-upload.service';

@Component({
  selector: 'app-az-storage-upload',
  templateUrl: './az-storage-upload.component.html',
  styleUrls: ['./az-storage-upload.component.css']
})
export class AzStorageUploadComponent implements OnInit {

  constructor(private storageUploader: AzStorageUploadService) { }

  ngOnInit(): void {
  }

}
