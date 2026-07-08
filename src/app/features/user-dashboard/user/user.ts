import { Component } from '@angular/core';
import { SideBar } from '../../../layout/sidebar/side-bar/side-bar';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [SideBar, RouterOutlet],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {

  pageTitle = 'Overview';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        let child = this.route.firstChild;

        while (child?.firstChild) {
          child = child.firstChild;
        }

        this.pageTitle = child?.snapshot.data['title'] || 'Overview';
      });

  }


}
