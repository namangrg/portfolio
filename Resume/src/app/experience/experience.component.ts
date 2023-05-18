import { Component, HostListener, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    window.scroll(0,0)
  }
  backtohome() {
    this.route.navigate(['/home']);
  }
  installApp: any;
  deferredPrompt: any;
  showButton = false;
  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e:any) {
    console.log(e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    this.showButton = true;
  }
  scrollToTop(){
    window.scroll(0,0)
  }
  method() {
    // hide our user interface that shows our A2HS button
    this.showButton = false;
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
    .then((choiceResult:any) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    this.deferredPrompt = null;
  });
  }
}
