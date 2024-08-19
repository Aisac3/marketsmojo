import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VerdictPageComponent } from './verdict/verdict-page/verdict-page.component';
import { SwitcherPageComponent } from './switcher/switcher-page/switcher-page.component';
import { VerdictModule } from './verdict/verdict.module';
import { SwitcherModule } from './switcher/switcher.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,VerdictPageComponent,SwitcherPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'marketsmojo';
}
