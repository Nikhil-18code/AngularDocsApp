import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input () collapsed:boolean=false;
  @Input() isOpen: boolean = false; 
  @Output() closeSidebar = new EventEmitter<void>();

  closeMenu(){
    this.closeSidebar.emit();
  }
}
