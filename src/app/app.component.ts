import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageDisplayComponent } from './components/image-display/image-display.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { DataExtractionComponent } from './components/data-extraction/data-extraction.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageDisplayComponent, ImageUploadComponent,DataExtractionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  selectedImage: File | null = null;

  onImageSelected(file: File) {
    this.selectedImage = file;
  }
}