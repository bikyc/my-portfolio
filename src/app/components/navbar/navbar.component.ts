import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeSection: string = 'home';
  greeting: string = '';
  greetingEmoji: string = '';
  userName: string = 'Bibek'; // Change to your name if you want

  ngOnInit() {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.greeting = 'Good Morning';
      this.greetingEmoji = '🌅';
    } else if (hour < 18) {
      this.greeting = 'Good Afternoon';
      this.greetingEmoji = '🌞';
    } else {
      this.greeting = 'Good Evening';
      this.greetingEmoji = '🌙';
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about', 'skills', 'cv', 'contact'];
    const scrollPos = window.scrollY + 150;

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

  isActive(section: string): boolean {
    return this.activeSection === section;
  }
}