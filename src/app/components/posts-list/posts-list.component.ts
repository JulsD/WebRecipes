import { Component } from '@angular/core';

import { Post } from '../../interfaces/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})

export class PostsListComponent {
  constructor(
    private postsService: PostsService,
  ){}

  posts: Post[];

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts(): void {
    this.postsService.getPosts().then(posts => this.posts = posts);
  }
}
