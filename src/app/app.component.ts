import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TOKEN_IN_SSR } from '../token';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-ssr';

  test = inject(TOKEN_IN_SSR, { optional: true });
}
