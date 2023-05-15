import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  tabs = [{ id: 1, name: 'Collabera' }, { id: 2, name: 'Infosys Ltd.' }];

  effect = 'scrollx';
  constructor(public translate: TranslateService, private route: Router) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {}
  backtohome() {
    this.route.navigate(['/home']);
  }
}
