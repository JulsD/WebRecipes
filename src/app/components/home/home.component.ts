import { Component, OnInit }    from '@angular/core';

import { Post }         from '../../interfaces/post';
import { navTags}       from '../../data/nav-tags'

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  navTags = navTags;
}
