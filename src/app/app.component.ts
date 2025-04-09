import { Component, HostListener } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Demo web';

  isNavbarCollapsed = false;

  whatsappUrl: string = 'https://wa.me/+91 133345555?text=I\'m%20interested%20in%20Purchase%20Your%20Furniture%20Products';
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  ngOnInit() {
    AOS.init();
  }
  
  handleNavClick(link: string): void {
    this.activeLink = link;
    this.toggleNavbar();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Check if navbarToggler and navbarCollapse are not null
    if (navbarToggler && navbarCollapse &&
      !navbarCollapse.contains(event.target as Node) &&
      !navbarToggler.contains(event.target as Node) &&
      this.isNavbarCollapsed) {
      this.isNavbarCollapsed = false;
    }
  }
  activeLink: string = 'home'; // Default active link

  setActive(link: string) {
    this.activeLink = link;
  }
  
}
