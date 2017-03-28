import { Component } from '@angular/core';


@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})

export class NavComponent {
  navTags: string[] = ['Home', 'Posts', 'About', 'Contacts'];
}
