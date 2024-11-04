import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="order-form-container">
      <h2>Delivery Details</h2>

      <div class="form-section">
        <h3>Pickup Details</h3>
        <div class="date-range">
          <div class="form-group">
            <label>From Date</label>
            <input type="date" class="form-input">
          </div>
          <div class="form-group">
            <label>To Date</label>
            <input type="date" class="form-input">
          </div>
        </div>

        <div class="time-slots">
          <div class="form-group">
            <label>From</label>
            <select class="form-input">
              <option>08:00</option>
              <option>09:00</option>
              <option>10:00</option>
            </select>
          </div>
          <div class="form-group">
            <label>To</label>
            <select class="form-input">
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
            </select>
          </div>
        </div>
      </div>

      <div class="form-section">
        <h3>Unloading Details</h3>
        <div class="date-range">
          <div class="form-group">
            <label>From Date</label>
            <input type="date" class="form-input">
          </div>
          <div class="form-group">
            <label>To Date</label>
            <input type="date" class="form-input">
          </div>
        </div>

        <div class="time-slots">
          <div class="form-group">
            <label>From</label>
            <select class="form-input">
              <option>08:00</option>
              <option>09:00</option>
              <option>10:00</option>
            </select>
          </div>
          <div class="form-group">
            <label>To</label>
            <select class="form-input">
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
            </select>
          </div>
        </div>
      </div>

      <div class="form-section">
        <h3>Cargo Details</h3>
        <div class="form-group">
          <label>Number of Pallets</label>
          <input type="number" class="form-input" min="1">
        </div>
        <div class="form-group">
          <label>Total Weight (kg)</label>
          <input type="number" class="form-input" min="1">
        </div>

        <div class="cargo-type">
          <label>Cargo Type</label>
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" name="cargoType" checked>
              <span>Standard</span>
            </label>
            <label class="radio-label">
              <input type="radio" name="cargoType">
              <span>Refrigerated</span>
            </label>
            <label class="radio-label">
              <input type="radio" name="cargoType">
              <span>ADR</span>
            </label>
          </div>
        </div>
      </div>

      <div class="price-section" *ngIf="estimatedPrice !== null">
        <div class="price-details">
          <span>Estimated Price:</span>
          <span class="price">€{{ estimatedPrice }}</span>
        </div>
      </div>

      <div class="button-group">
        <button class="calculate-button" (click)="calculatePrice()">Calculate Price</button>
        <button class="submit-button" [disabled]="estimatedPrice === null">Book Now</button>
      </div>
    </div>
  `,
  styles: [`
    .order-form-container {
      padding: 1.5rem;
      height: 100%;
      overflow-y: auto;
    }

    h2 {
      color: #4B5563;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }

    h3 {
      color: #4B5563;
      margin-bottom: 1rem;
      font-size: 1.1rem;
      font-weight: 500;
    }

    .form-section {
      background-color: #F9FAFB;
      padding: 1.25rem;
      border-radius: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .form-group {
      margin-bottom: 1rem;
      flex: 1;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #4B5563;
      font-size: 0.875rem;
    }

    .form-input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #E5E7EB;
      border-radius: 0.375rem;
      font-size: 0.875rem;
      transition: border-color 0.2s;
      background-color: white;
    }

    .form-input:focus {
      outline: none;
      border-color: #8B5CF6;
      box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    }

    .date-range {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .time-slots {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .radio-group {
      display: flex;
      gap: 1rem;
      margin-top: 0.5rem;
    }

    .radio-label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    .price-section {
      background-color: #F9FAFB;
      padding: 1.25rem;
      border-radius: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .price-details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.125rem;
      color: #4B5563;
    }

    .price {
      font-weight: 600;
      color: #8B5CF6;
      font-size: 1.25rem;
    }

    .button-group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .calculate-button {
      padding: 0.75rem;
      background-color: #F3F4F6;
      color: #4B5563;
      border: 1px solid #E5E7EB;
      border-radius: 0.375rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .calculate-button:hover {
      background-color: #E5E7EB;
      border-color: #D1D5DB;
    }

    .submit-button {
      padding: 0.75rem;
      background-color: #8B5CF6;
      color: white;
      border: none;
      border-radius: 0.375rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .submit-button:hover:not(:disabled) {
      background-color: #7C3AED;
    }

    .submit-button:disabled {
      background-color: #C4B5FD;
      cursor: not-allowed;
    }
  `]
})
export class OrderFormComponent {
  estimatedPrice: number | null = null;

  calculatePrice() {
    // Simulate price calculation
    setTimeout(() => {
      this.estimatedPrice = Math.floor(Math.random() * 1000) + 500;
    }, 500);
  }
}