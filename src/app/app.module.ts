import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDisplayComponent } from './components/image-display/image-display.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { DataExtractionComponent } from './components/data-extraction/data-extraction.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ImageDisplayComponent,
    ImageUploadComponent,
    DataExtractionComponent
  ]
})
export class AppModule { }
