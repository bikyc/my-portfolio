import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  name = 'Bibek Chaudhary';
  title = 'Full Stack Developer';
  summary = `Passionate developer with expertise in building scalable web applications and modern user interfaces.`;
  contact = {
    email: 'bibek.cdy@email.com',
    phone: '+977 9804657508',
    location: 'Kathmandu, Nepal',
    linkedin: 'https://www.linkedin.com/in/imbibekchaudhary/'
  };
  skills = [
    {
      name: 'Angular',
      description: [
        'Developed dynamic and responsive web applications.',
        'Implemented reusable components and services.'
      ]
    },
    {
      name: 'TypeScript',
      description: [
        'Wrote type-safe code for large-scale projects.',
        'Utilized advanced TypeScript features for maintainability.'
      ]
    },

    {
      name: 'HTML & CSS',
      description: [
        'Created accessible and modern layouts.',
        'Ensured cross-browser compatibility and responsiveness.'
      ]
    },
    {
      name: 'REST APIs',
      description: [
        'Integrated third-party APIs and built custom endpoints.',
        'Ensured secure and efficient data exchange.'
      ]
    }
  ];
  experience = [
    {
      role: 'Full Stack Developer',
      company: 'Danphe Health',
      period: '2023 - Present',
      skills: ['Angular', 'SqlServer', 'C#'],
      details: [
        'Developed and maintained scalable, modular web applications.',
      'Built RESTful APIs with ASP.NET Core and optimized DB queries.',
      'Implemented Angular best practices including lazy loading and RxJS.',
      'Collaborated with cross-functional teams for end-to-end delivery.',
      'Deployed solutions on Azure using CI/CD pipelines.'
      ]
    },
    {
      role: 'Jr. Developer',
      company: 'Danphe Health',
      period: '2022 - 2023',
      skills: ['Angular', 'SqlServer', 'C#'],
      details: [
        'Built responsive UI components using Angular.',
      'Integrated APIs and assisted in frontend/backend debugging.',
      'Worked closely with designers to translate mockups into code.'
      ]
    }
  ];
  education = [
    {
      degree: 'Bachelors of Computer Science',
      school: 'Pokhara University',
      period: '2021 batch'
    }
  ];

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf';
    link.download = 'Bibek_Chaudhary_CV.pdf';
    link.click();
  }
}