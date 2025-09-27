import { Component, OnInit } from '@angular/core';

interface TechStack {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  roles: string[] = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];
  displayText: string = '';
  private roleIndex = 0;
  private charIndex = 0;
  private typing = true;

  techStack: TechStack[] = [
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'TypeScript', icon: 'fab fa-js-square' },
    { name: 'MongoDB', icon: 'fas fa-database' }
  ];

  ngOnInit(): void {
    this.typeWriterEffect();
  }

  typeWriterEffect() {
    const currentRole = this.roles[this.roleIndex];
    if (this.typing) {
      if (this.charIndex < currentRole.length) {
        this.displayText += currentRole.charAt(this.charIndex);
        this.charIndex++;
        setTimeout(() => this.typeWriterEffect(), 100);
      } else {
        this.typing = false;
        setTimeout(() => this.typeWriterEffect(), 1200);
      }
    } else {
      if (this.charIndex > 0) {
        this.displayText = this.displayText.slice(0, -1);
        this.charIndex--;
        setTimeout(() => this.typeWriterEffect(), 50);
      } else {
        this.typing = true;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        setTimeout(() => this.typeWriterEffect(), 400);
      }
    }
  }
}