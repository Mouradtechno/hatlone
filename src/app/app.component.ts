import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eskul';

  // tslint:disable-next-line:typedef
  @HostListener('window:scroll', []) onWindowScroll() {
    this.scrollFunction();
  }
// tslint:disable-next-line:typedef
  scrollFunction() {
    if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
        document.getElementById('btn-back-to-top').style.display = 'block';
    } else {
        document.getElementById('btn-back-to-top').style.display = 'none';
    }
  }

  // tslint:disable-next-line:typedef
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
