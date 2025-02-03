import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  styleUrl: './app.component.css',
  template: ` <router-outlet /> `,
})
export class AppComponent {}
