import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar {

   menuItems = [
    {
      label: 'Overview',
      route: '/dashboard'
    },
    {
      label: 'Profile',
      route: '/dashboard/profile'
    },
    {
      label: 'Appointments',
      route: '/dashboard/appointments'
    },
    {
      label: 'Doctors',
      route: '/dashboard/doctors'
    },
    {
      label: 'Settings',
      route: '/dashboard/settings'
    },
    
  ];


constructor(private router: Router) {}

logout() {
  localStorage.removeItem('token');

  // remove any other stored data if needed
  // localStorage.clear();

  this.router.navigate(['/login']);
}


}
