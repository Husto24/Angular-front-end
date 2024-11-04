import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { OrderFormComponent } from './order-form/order-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, MapComponent, OrderFormComponent],
  template: `
    <div class="app-container">
      <header class="header" #header>
        <div class="header-gradient" [style.background-position]="gradientPosition"></div>
        <div class="header-content">
          <div class="header-left">
            <h1>TruckGo</h1>
          </div>
          
          <nav class="header-nav">
            <a href="#" class="nav-link">My Orders</a>
            <a href="#" class="nav-link">Order History</a>
          </nav>

          <div class="header-right">
            <button class="auth-button login">Log in</button>
            <button class="auth-button register">Register</button>
          </div>
        </div>
      </header>
      
      <main class="main-content">
        <app-map class="map-container"></app-map>
        <app-order-form class="order-form"></app-order-form>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background-color: #fff;
    }

    .header {
      position: relative;
      padding: 1.25rem 2rem;
      overflow: hidden;
      box-shadow: 
        0 4px 20px -1px rgba(0, 0, 0, 0.15),
        0 2px 10px -1px rgba(0, 0, 0, 0.1);
      z-index: 10;
    }

    .header-gradient {
      position: absolute;
      top: -200%;
      left: -200%;
      right: -200%;
      bottom: -200%;
      background: radial-gradient(
        circle at center,
        rgba(236, 72, 153, 0.7) 0%,
        rgba(167, 139, 250, 0.8) 25%,
        rgba(139, 92, 246, 0.9) 50%,
        rgba(124, 58, 237, 0.95) 75%
      );
      filter: blur(60px);
      transition: background-position 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 0;
      opacity: 0.85;
      mix-blend-mode: soft-light;
      transform: translateZ(0);
    }

    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        90deg,
        rgba(139, 92, 246, 0.95),
        rgba(167, 139, 250, 0.9),
        rgba(139, 92, 246, 0.95)
      );
      pointer-events: none;
      z-index: 1;
    }

    .header::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0)
      );
      z-index: 2;
      opacity: 0.8;
    }

    .header-content {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 3;
    }

    .header-left h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: 800;
      background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0.95));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.5px;
      text-shadow: 
        0 2px 10px rgba(0, 0, 0, 0.2),
        0 0 40px rgba(255, 255, 255, 0.2);
    }

    .header-nav {
      display: flex;
      gap: 3rem;
    }

    .nav-link {
      color: white;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 600;
      padding: 0.5rem 0;
      position: relative;
      transition: all 0.3s ease;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0)
      );
      transform: scaleX(0);
      transition: transform 0.3s ease;
      border-radius: 2px;
    }

    .nav-link:hover {
      opacity: 1;
      transform: translateY(-1px);
      text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .nav-link:hover::after {
      transform: scaleX(1);
    }

    .header-right {
      display: flex;
      gap: 1rem;
    }

    .auth-button {
      padding: 0.75rem 1.5rem;
      border-radius: 0.75rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }

    .auth-button.login {
      background-color: transparent;
      border: 2px solid rgba(255, 255, 255, 0.9);
      color: white;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    .auth-button.login:hover {
      background-color: rgba(255, 255, 255, 0.15);
      transform: translateY(-2px);
      box-shadow: 
        0 4px 15px rgba(0, 0, 0, 0.2),
        0 0 20px rgba(255, 255, 255, 0.1);
    }

    .auth-button.register {
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.95),
        rgba(255, 255, 255, 0.9)
      );
      border: none;
      color: #7C3AED;
      box-shadow: 
        0 4px 10px rgba(0, 0, 0, 0.1),
        0 0 20px rgba(255, 255, 255, 0.2);
    }

    .auth-button.register:hover {
      transform: translateY(-2px);
      box-shadow: 
        0 6px 20px rgba(0, 0, 0, 0.15),
        0 0 30px rgba(255, 255, 255, 0.3);
      color: #6D28D9;
    }

    .main-content {
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: 1rem;
      padding: 1rem;
      max-width: 1400px;
      margin: 0 auto;
      height: calc(100vh - 84px);
    }

    .map-container {
      background-color: #f3f4f6;
      border-radius: 0.5rem;
      overflow: hidden;
    }

    .order-form {
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    @media (max-width: 768px) {
      .main-content {
        grid-template-columns: 1fr;
      }
      
      .header-content {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 0;
      }

      .header-nav {
        order: 3;
        width: 100%;
        justify-content: center;
      }

      .auth-button {
        padding: 0.5rem 1rem;
      }
    }
  `]
})
export class App {
  title = 'TruckGo';
  gradientPosition = '50% 50%';

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const header = document.querySelector('.header') as HTMLElement;
    if (!header) return;

    const rect = header.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    
    this.gradientPosition = `${x}% ${y}%`;
  }
}