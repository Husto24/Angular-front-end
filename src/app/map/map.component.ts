import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="map-placeholder">
      <div class="location-panel">
        <div class="location-header">
          <h2>Where can we help?</h2>
        </div>
        <div class="location-inputs">
          <div class="input-group">
            <div class="icon pickup">●</div>
            <input type="text" placeholder="Enter pickup location" class="location-input">
          </div>
          <div class="connector-line"></div>
          <div class="input-group">
            <div class="icon delivery">●</div>
            <input type="text" placeholder="Enter delivery location" class="location-input">
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .map-placeholder {
      width: 100%;
      height: 100%;
      background-color: #E5E7EB;
      position: relative;
    }

    .location-panel {
      position: absolute;
      top: 2rem;
      left: 2rem;
      right: 2rem;
      max-width: 500px;
      background: white;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      padding: 1.5rem;
    }

    .location-header h2 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1F2937;
      margin-bottom: 1.5rem;
    }

    .location-inputs {
      position: relative;
    }

    .input-group {
      display: flex;
      align-items: center;
      gap: 1rem;
      position: relative;
      z-index: 1;
    }

    .input-group:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    .icon {
      font-size: 0.75rem;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }

    .icon.pickup {
      color: #8B5CF6;
      background-color: #EDE9FE;
    }

    .icon.delivery {
      color: #059669;
      background-color: #D1FAE5;
    }

    .connector-line {
      position: absolute;
      left: 11px;
      top: 24px;
      bottom: 24px;
      width: 2px;
      background-color: #E5E7EB;
      z-index: 0;
    }

    .location-input {
      flex: 1;
      padding: 0.875rem 1rem;
      border: 1px solid #E5E7EB;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      background-color: #F9FAFB;
      transition: all 0.2s;
    }

    .location-input:focus {
      outline: none;
      border-color: #8B5CF6;
      background-color: white;
      box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    }

    @media (max-width: 640px) {
      .location-panel {
        left: 1rem;
        right: 1rem;
      }
    }
  `]
})
export class MapComponent {}