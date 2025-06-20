import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  color: string;
  points: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [
    {
      name: 'Angular',
      icon: 'fa-brands fa-angular',
      color: '#dd0031',
      points: [
        'Developed and maintained complex SPAs using Angular (v7 to v13)',
        'Implemented reactive forms, custom directives, and pipes',
        'Optimized performance with lazy loading and OnPush change detection',
        'Used RxJS for real-time data streams and state management',
        'Integrated Angular Material & TailwindCSS for responsive UI'
      ]
    },
    {
      name: '.NET Core',
      icon: 'fa-solid fa-code',
      color: '#512bd4',
      points: [
        'Built scalable RESTful APIs using ASP.NET Core (3.1 to 6)',
        'Implemented clean architecture with layered services and repositories',
        'Used Entity Framework Core for code-first & DB-first approaches',
        'Integrated JWT-based authentication and role-based authorization',
        'Handled async background jobs using Hangfire'
      ]
    },
    {
      name: 'SQL',
      icon: 'fa-solid fa-database',
      color: '#00758f',
      points: [
        'Designed normalized and denormalized schemas for analytics',
        'Wrote optimized joins, views, CTEs, and stored procedures',
        'Implemented indexing strategies and query tuning for performance',
        'Worked with SQL Server, PostgreSQL, and MySQL in production'
      ]
    },
    {
      name: 'JavaScript',
      icon: 'fa-brands fa-js',
      color: '#f7df1e',
      points: [
        'Used ES6+ features to write clean, modular JavaScript',
        'Built reusable utility libraries and helper functions',
        'Handled async operations with Promises, async/await, and callbacks',
        'Interfaced with third-party libraries like Chart.js, Lodash, and Leaflet'
      ]
    },
    {
      name: 'HTML5',
      icon: 'fa-brands fa-html5',
      color: '#e34c26',
      points: [
        'Used semantic HTML for better SEO and accessibility',
        'Integrated HTML APIs like Canvas, Drag and Drop, and Audio',
        'Built responsive layouts using mobile-first design principles'
      ]
    },
    {
      name: 'CSS3',
      icon: 'fa-brands fa-css3-alt',
      color: '#1572b6',
      points: [
        'Designed UIs using Flexbox, Grid, and CSS Variables',
        'Created animated effects using keyframes and transitions',
        'Used SASS/SCSS with modular structure for large-scale apps',
        'Built dark/light theme toggles and media query breakpoints'
      ]
    },
    {
      name: 'TypeScript',
      icon: 'fa-solid fa-code',
      color: '#3178c6',
      points: [
        'Developed strongly-typed Angular applications for safety and scalability',
        'Created custom interfaces, types, enums, generics, and type guards',
        'Integrated third-party TypeScript definitions and modules'
      ]
    },
    {
      name: 'Git',
      icon: 'fa-brands fa-git-alt',
      color: '#f34f29',
      points: [
        'Collaborated via Git with GitHub, GitLab, and Azure Repos',
        'Used feature branching, rebasing, and conflict resolution strategies',
        'Managed releases via CI/CD and Git-based version tagging',
        'Participated in code reviews and handled pull request best practices'
      ]
    },
    {
      name: 'Azure',
      icon: 'fa-brands fa-microsoft',
      color: '#0078d4',
      points: [
        'Deployed Angular + .NET apps on Azure App Service and Azure VMs',
        'Configured Azure DevOps for CI/CD pipelines with test/stage/prod',
        'Worked with Azure SQL, Blob Storage, and Key Vault',
        'Monitored performance using Application Insights and Log Analytics'
      ]
    }

  ];

  centerIndex = 1;
  visibleCount = 3;
  get focusOffset() { return Math.floor(this.visibleCount / 2); }

  get visibleSkills(): Skill[] {
    const start = Math.max(0, this.centerIndex - this.focusOffset);
    const end = Math.min(this.skills.length, start + this.visibleCount);
    const adjustedStart = Math.max(0, end - this.visibleCount);
    return this.skills.slice(adjustedStart, end);
  }

  ngOnInit(): void { }
prev() {
  if (this.centerIndex > 0) {
    this.centerIndex--;
  } else {
    this.centerIndex = this.skills.length - 1; // Loop to last
  }
}

next() {
  if (this.centerIndex < this.skills.length - 1) {
    this.centerIndex++;
  } else {
    this.centerIndex = 0; // Loop to first
  }
}
  goTo(idx: number) {
    this.centerIndex = idx;
  }
}