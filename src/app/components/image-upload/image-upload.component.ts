
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.css'
})

export class ImageUploadComponent {
  @Output() imageSelected = new EventEmitter<File>();

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.files) {
      const file = input.files[0];
      this.imageSelected.emit(file);
    }
  }
}
