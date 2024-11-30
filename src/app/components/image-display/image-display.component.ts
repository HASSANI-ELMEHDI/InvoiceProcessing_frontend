import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-image-display',
  standalone: true,
  imports: [NgIf],
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})

export class ImageDisplayComponent {
  @Input() image: File | null = null;
  imageUrl: string | null = null;

  ngOnChanges() {
    setTimeout(() => {
      this.imageUrl = this.image ? URL.createObjectURL(this.image) : null;
    });
  }
}
