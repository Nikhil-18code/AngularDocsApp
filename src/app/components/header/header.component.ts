import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggleSidebar=new EventEmitter<void>();
  @Output() toggleDarkMode=new EventEmitter<void>();

  onToggleSidebar(){
    this.toggleSidebar.emit();
  }
  onToggleDarkMode(){
    this.toggleDarkMode.emit();
  }
}
