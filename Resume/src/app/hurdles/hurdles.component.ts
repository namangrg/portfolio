import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-hurdles',
  templateUrl: './hurdles.component.html',
  styleUrls: ['./hurdles.component.scss'],
})
export class HurdlesComponent {
  effect = 'scrollx';
  constructor(public translate: TranslateService, private route: Router) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  details: any = [
    {
      name: 'PWA',
      project: 'ICEGATE',
      problem:
        'As there are long forms including 200+ fields , due to internet error it might result to loose data the user has stored on frequent reload of the web page, there should be some way user can download the files in ofline mode and the files gets uploaded whenever user comes online.',
      solution:
        'Post Researching PWA (Progressive Web Apps) seems a best solutions to this problem , PWA apps does not depends on network to work. PWA caches the application and renders it from local cache.It Uses service workers ',
    },
    {
      name: 'Boiler Plate Setup',
      project: 'CareGaps',
      problem:
        'It was a green field project and the architecture follows single ECS, It was the first time for me to setup a code , add all the mandatory files.',
      solution:
        'Taking one step at a time , I started with creating a bit bucket repository, adding new angular project folder , installing node modules including for Ng-ZORRO, ZSUI. Adding husky,eslint to the project.',
    },
    {
      name: 'NG-Select Customization',
      project: 'CTFO',
      problem:
        'Here Comes a requirement where I have to add dynamic Ng-Selects depending on the some values selected, But the main issue was that the ng-select dropdown should include an input field as a last ng-option, validations to input field and a search bar with the dependency of EVENT trigger on Validation ',
      solution:
        'This hurddle helped me a lot to learn debugging at next level . The implementation was done with the reference of stachoverflow , adding hostListeners to the dropdown and customizing the content of ng-select ',
    },
  ];
  hurdleData = {
    hurdleName: null,
    projectName: null,
    problem: null,
    solution: null,
    FormData: new FormData(),
  };
  showAddhurdleModal = false;
  ngOnInit(): void {}
  backtohome() {
    this.route.navigate(['/home']);
  }
  addHurdle() {
    this.showAddhurdleModal = true;
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.showAddhurdleModal = false;
    let obj: any = {};

    obj['name'] = this.hurdleData.hurdleName;
    obj['project'] = this.hurdleData.projectName;
    obj['problem'] = this.hurdleData.problem;
    obj['solution'] = this.hurdleData.solution;
    this.details.push(obj);
    console.log(this.details);
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.showAddhurdleModal = false;
  }
  isSaveDisabled() {
    if (
      this.hurdleData.hurdleName == null ||
      this.hurdleData.hurdleName == '' ||
      this.hurdleData.problem == null ||
      this.hurdleData.problem == '' ||
      this.hurdleData.projectName == null ||
      this.hurdleData.projectName == '' ||
      this.hurdleData.solution == null ||
      this.hurdleData.solution == ''
    )
      return true;
    else return false;
  }
}
