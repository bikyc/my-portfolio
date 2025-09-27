import { Component, HostListener, OnInit } from '@angular/core';

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  isCollapsed: boolean = false;
  activeSection: string = 'home';
  isMobile: boolean = false;
  
  navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-code' },
    { id: 'cv', label: 'CV', icon: 'fas fa-file-alt' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about', 'skills', 'cv', 'contact'];
    const scrollPos = window.scrollY + 200;

    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const offsetTop = el.offsetTop;
        const offsetHeight = el.offsetHeight;

        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
    if (this.isMobile) {
      this.isCollapsed = true;
    }
  }

  toggleNav() {
    this.isCollapsed = !this.isCollapsed;
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}