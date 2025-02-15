import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,SidebarComponent,NgClass,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  constructor(private router:Router){
    this.router.events.subscribe(e=>{
      if(e instanceof NavigationEnd){
        window.scrollTo(0,0);
      }
    });
  }

  title="Angular Documentation App";
  isSidebarCollapsed=false;
  isDarkMode=false;

  toggleSidebar():void {
    this.isSidebarCollapsed=!this.isSidebarCollapsed;
  }
  toggleDarkMode():void {
    this.isDarkMode = !this.isDarkMode;
  }

}
