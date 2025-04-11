import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import Aos from 'aos';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Demo web';

  isNavbarCollapsed: boolean = false;
  activeLink: any;
  activeLinkName:any

  whatsappUrl: string = 'https://wa.me/+91 133345555?text=I\'m%20interested%20in%20Purchase%20Your%20Furniture%20Products';

  constructor(private router: Router) { }
  
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
    console.log(this.isNavbarCollapsed);

  }



  toggleNavbar1() {
    this.isNavbarCollapsed = false;
  }

  closeMenu() {
    this.isNavbarCollapsed = false;
  }

  ngOnInit() {
    
    if (!!this.router.url){
      this.activeLink = this.router.url
    }
    else{
      this.activeLink = 'home'
    }

    Aos.init();
    const hamburger = document.querySelector(".hamburger") as HTMLElement | null;
    const navMenu = document.querySelector(".nav-menu") as HTMLElement | null;

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      });

      document.querySelectorAll(".nav-link").forEach((n) => {
        n.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        });
      });
    }

  }

  // handleNavClick(link: string): void {
  //   this.activeLink = link;
  //   this.toggleNavbar();
  // }

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

  setActive(link: string) {
    this.activeLink = link;
  }
}
