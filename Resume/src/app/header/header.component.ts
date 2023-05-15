import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  check(e: any) {
    this.translate.use(e);
  }
  openPage(page: any) {
    if (page == 'LinkedIn') {
      window.open('https://www.linkedin.com/in/naman-garg-0991b722');
    }
  }
}
