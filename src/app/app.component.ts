import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'consult';
  showHeaderPage = 'none';
  dashboard = false;
  account = false;

    constructor(public router: Router, private activatedRoute: ActivatedRoute) {
        this.router.events
          .subscribe((event) => {
            if (event instanceof NavigationEnd) {
              let url = event.url;
              if(url == "/dashboard/admin") {
                this.dashboard = true;
              } else
              if(url == "/account/user") {
                this.account = true;
              } else
              if(url == "/home" || url == '/') {
                this.showHeaderPage = 'none';
              } else {
                this.showHeaderPage = 'block';
              }
            }
          })
    }

    ngOnInit() {
      this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else if (child.snapshot.data && child.snapshot.data['title']) {
              return child.snapshot.data['title'];
            } else {
              return '';
            }
          }
        })
      )
      .subscribe((title) => {
        this.router.url != '/home'? this.title = title : this.title = '';
      });

    }

}
