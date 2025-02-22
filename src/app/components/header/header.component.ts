import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title1="Angular Docs";
  title2="Ng Docs";
  @Output() toggleSidebar=new EventEmitter<void>();
  @Output() toggleDarkMode=new EventEmitter<void>();

  onToggleSidebar(){
    this.toggleSidebar.emit();
  }
  onToggleDarkMode(){
    this.toggleDarkMode.emit();
  }
  isMobile = window.innerWidth <= 768; // Initial check

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }
}
