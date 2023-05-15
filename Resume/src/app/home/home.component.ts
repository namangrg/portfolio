import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public translate: TranslateService, private route: Router) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  endFooter = ['ok', 'cancel'];
  details = [
    { name: 'education', isTrue: false, id: '#education' },
    { name: 'experience', isTrue: false },
    { name: 'skills', isTrue: false, id: '#skillsSet' },
    { name: 'tools', isTrue: false, id: '#tool' },
    { name: 'certifications', isTrue: false },
    { name: 'aboutme', isTrue: false },
    { name: 'stuck', isTrue: false },
  ];
  toolsData = [
    { name: 'VS Code' },
    { name: 'JIRA' },
    { name: 'Bit Bucket' },
    { name: 'Azure' },
    { name: 'GIT Bash' },
    { name: 'PostMan' },
  ];
  educationData = [
    {
      type: 'Btech(IT)',
      name: 'Dr. Akhilesh Das Gupta Institute of Technology & Management',
      year: '2015-2019',
      percent: '83.7%',
      cgpa: '',
    },
    {
      type: 'Senior Secondary School',
      name: 'GreenWay Modern School',
      year: '2012-2014',
      percent: '80.4%',
      cgpa: '',
    },
    {
      type: 'Higher Secondary School',
      name: 'GreenWay Modern School',
      year: '2010-2012',
      percent: '',
      cgpa: '10 CGPA',
    },
  ];
  skillset = [
    {
      name: 'Angular 15',
      isTrue: false,
      color: ' #fe6459',
      description:
        'I got Trained In MEAN Stack in 2019(Infosys-training),since then I am working on various versions of Angular including Angular 9,11,13,15',
      img: '../../assets/images/angular.png',
    },
    {
      name: 'Bootstrap',
      isTrue: false,
      color: '#e1c7ff',
      description:
        'I have been using Bootstrap since College days majorly for its Grids,navbars and pre-defined classes used for padding and margin,',
      img: '../../assets/images/bootstrap.png',
    },
    {
      name: 'HTML 5',
      isTrue: false,
      color: '#D0A331',
      description:
        'HTML is the core of frontend programming , from using predefined tags to bind Data via custom tags,HTML is the backbone of UI.',
      img: '../../assets/images/html5.png',
    },
    {
      name: 'CSS | Less | SCSS | SASS',
      isTrue: false,
      color: '#22f9ff',
      description:
        'I have used CSS , Less, SCSS in various projects depending on their respective requirement including style inheritence, reusing the styling.',
      img: '../../assets/images/css.png',
    },
    {
      name: 'Web design & Design Thinking',
      isTrue: true,
      color: '#505946  ',
      description:
        'Post 3years of UI Development my daily tasks includes Design thinking,implementing Architecture maintaining positiveCode flow.',
      img: '../../assets/images/designThinking.png',
    },
    {
      name: 'NG-Zorro & Angular Material',
      isTrue: false,
      color: '#fe6459',
      description:
        'Angular Supports various CSS libraries like Material ,NZ-Zorro . I have worked on Angular Material during ICEGATE project & NZ-Zorro during ASW,CareGaps,MDP.',
      img: '../../assets/images/ng-zorro.png',
    },
    {
      name: 'Project Management Tools',
      isTrue: false,
      color: '#D0A331',
      description:
        'Working In a AGILE methodology helped me understand more practical usage of GIT, JIRA, AZURE,BITBucket for the upliftment of the project.',
      img: '../../assets/images/jira2.png',
    },
    {
      name: 'Strong Communication Practice',
      isTrue: false,
      color: '#e1c7ff',
      description:
        'Strong Communication helped me throughout the tenure to avoid miscommunication and understand/develop the requirements within the specific duration',
      img: '../../assets/images/comm.png',
    },
  ];
  skillDetail(skill: any, value: any) {
    this.skillset.map((element) => {
      if (element.name == skill.name) {
        element.isTrue = value;
      }
    });
  }
  ngOnInit(): void {
    this.skillset.map((element) => {
      element.isTrue = false;
    });
  }
  someFunc(event: any) {
    console.log(event);
    if (event.target.innerText.toLowerCase() == 'experience' || event.target.innerText=='अनुभव') {
      event.preventDefault();
      this.route.navigate(['/home/experience']);
    }
    if (event.target.innerText.toLowerCase() == 'hurdles' || event.target.innerText=='स्र्कावट') {
      event.preventDefault();
      this.route.navigate(['/home/hurdles']);
    }

    // rest of your code here
  }
}
