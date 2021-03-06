import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Post } from '../../interfaces/post';
import { PostsService } from '../../services/posts.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  post: Post;
  posts: Post[];

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.postsService.getPost(+params['id']))
      .subscribe((post: Post) => this.post = post);
  }
  show(): void {
    console.log(this.post);
  }

  goBack(): void {
    this.location.back();
  }
}
