import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-data-extraction',
  standalone: true,
  imports: [NgIf, CommonModule, ProgressBarModule],
  templateUrl: './data-extraction.component.html',
  styleUrls: ['./data-extraction.component.css']
})
export class DataExtractionComponent {
  @Input() image: File | null = null;
  extractedData: string = ''; // Data extracted from the API
  isLoading = false; // Loading indicator
  loadingValue = 0; // Loading progress value
  errorMessage: string | null = null; // Error message

  // Method to extract data by calling the API
  async extractDataFromImage() {
    if (!this.image) {
      this.errorMessage = 'No image provided!';
      return;
    }
    this.extractedData = ''
    this.isLoading = true;
    this.loadingValue = 10; // Initial progress
    this.errorMessage = null;

    try {
      // Simulate initial delay
      this.simulateProgress();

      // Create FormData object
      const formData = new FormData();
      formData.append('image', this.image);

      // Call API using fetch
      const response = await fetch('http://localhost:8080/api/process-image', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();

      this.loadingValue = 100; // Progress complete
      this.extractedData = data.data || 'No data extracted';
    } catch (error) {
      console.error('Error extracting data:', error);
      this.errorMessage = 'Failed to extract data. Please try again.';
    } finally {
      setTimeout(() => {
        this.isLoading = false;
        this.loadingValue = 0; // Reset progress
      }, 500); // Small delay for UX
    }
  }

  // Simulate progress for better UX
  simulateProgress() {
    const interval = setInterval(() => {
      if (this.loadingValue >= 80) {
        clearInterval(interval);
      } else {
        this.loadingValue += 10; // Increment progress
      }
    }, 300); // Update every 300ms
  }
}
