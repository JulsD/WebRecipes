import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { POSTS } from '../data/mock-posts';

@Injectable()
export class PostsService {
  getPosts(): Promise<Post[]> {
    return Promise.resolve(POSTS);
  }
  getPost(id: number): Promise<Post> {
    return this.getPosts()
               .then(posts => posts.find(post => post.id === id));
  }
}
