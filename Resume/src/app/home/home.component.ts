import { Component, HostListener, OnInit } from '@angular/core';
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
  installApp: any;
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
    { name: 'Postman' },
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
      color: ' #20272f',
      description:
        'I got Trained In MEAN Stack in 2019(Infosys-training),since then I am working on various versions of Angular including Angular 9,11,13,15',
      img: '../../assets/images/angular.png',
    },
    {
      name: 'Javascript & TypeScript',
      isTrue: false,
      color: ' #20272f',
      description:
        'Having a Strong understanding of JavaScript & Typescript fundamentals, including variables, data types, functions, control flow, and object-oriented programming concepts.',
      img: '../../assets/images/js.png',
    },
    {
      name: 'Storybook & chromatic',
      isTrue: false,
      color: ' #20272f',
      description: 'Storybook and Chromatic are powerful tools that can greatly enhance our development workflow when working with Angular by allowing allows us to build, test, and showcase individual UI components in isolation',
      img: '../../assets/images/storybook.png',
    },
    {
      name: 'Bootstrap',
      isTrue: false,
      color: ' #20272f',
      description:
        'I have been using Bootstrap since College days majorly for its Grids,navbars and pre-defined classes used for padding and margin,',
      img: '../../assets/images/bootstrap.png',
    },
    {
      name: 'HTML 5',
      isTrue: false,
      color: ' #20272f',
      description:
        'HTML is the core of frontend programming , from using predefined tags to bind Data via custom tags,HTML is the backbone of UI.Experience in implementing responsive web design and cross-browser compatibility',
      img: '../../assets/images/html5.png',
    },
    {
      name: 'CSS | Less | SCSS | SASS',
      isTrue: false,
      color: ' #20272f',
      description:
        'I have used CSS , Less, SCSS in various projects depending on their respective requirement including style inheritence, reusing the styling.',
      img: '../../assets/images/css.png',
    },

    {
      name: 'Web design & Design Thinking',
      isTrue: true,
      color: ' #20272f',
      description:
        'Post 3years of UI Development my daily tasks includes Design thinking,implementing Architecture maintaining positiveCode flow.',
      img: '../../assets/images/designThinking.png',
    },
    {
      name: 'Ant & Angular Material',
      isTrue: false,
      color: ' #20272f',
      description:
        'Angular Supports various CSS libraries like Material ,NZ-Zorro . I have worked on Angular Material during ICEGATE project & NZ-Zorro during ASW,CareGaps,MDP.',
      img: '../../assets/images/ng-zorro.png',
    },
    {
      name: 'Project Management Tools',
      isTrue: false,
      color: ' #20272f',
      description:
        'Working In a AGILE methodology helped me understand more practical usage of GIT, JIRA, AZURE,BITBucket for the upliftment of the project.',
      img: '../../assets/images/jira2.png',
    },
    {
      name: 'Strong Communication Practice',
      isTrue: false,
      color: ' #20272f',
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
  downloadResume() {
    let link = document.createElement('a');
    link.download = 'Naman_Resume';
    link.href = 'assets/RESUME_NAMAN_May.pdf';
    link.click();
  }
  // method() {
  //   let deferredPrompt: any;
  //   window.addEventListener('beforeinstallprompt', (e) => {
  //     deferredPrompt = e;
  //   });

  //   this.installApp.addEventListener('click', async () => {
  //     if (deferredPrompt !== null) {
  //       deferredPrompt.prompt();
  //       const { outcome } = await deferredPrompt.userChoice;
  //       if (outcome === 'accepted') {
  //         deferredPrompt = null;
  //       }
  //     }
  //   });
  // }
  deferredPrompt: any;
  showButton = false;
  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e: any) {
    console.log(e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    this.showButton = true;
  }
  scrollToTop() {
    window.scroll(0, 0);
  }
  backtohome() {
    this.route.navigate(['/home']);
  }
  method() {
    // hide our user interface that shows our A2HS button
    this.showButton = false;
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      this.deferredPrompt = null;
    });
  }
  someFunc(event: any) {
    console.log(event);
    if (
      event.target.innerText.toLowerCase() == 'experience' ||
      event.target.innerText == 'अनुभव'
    ) {
      event.preventDefault();
      this.route.navigate(['/home/experience']);
    }
    if (
      event.target.innerText.toLowerCase() == 'hurdles' ||
      event.target.innerText == 'स्र्कावट'
    ) {
      event.preventDefault();
      this.route.navigate(['/home/hurdles']);
    }

    // rest of your code here
  }
  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
