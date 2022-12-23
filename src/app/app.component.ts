import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {}

  title = 'consult';

  shouldShowBreadcrumb:boolean = false;

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
        this.title = title;
      });
    }

    hasRoute(route: string) {
      console.log(this.router.url);
      return this.router.url.includes(route);
    }
}
