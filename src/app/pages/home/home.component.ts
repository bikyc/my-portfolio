import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  roles: string[] = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer'
  ];
  displayText: string = '';
  private roleIndex = 0;
  private charIndex = 0;
  private typing = true;

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