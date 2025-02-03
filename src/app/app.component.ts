import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: `./app.component.html`,
  imports: [RouterOutlet, ButtonModule],
})
export class AppComponent {
  protected toggleTheme = (): void => {
    document.documentElement.classList.toggle('dark');
  };
}
