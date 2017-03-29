import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Post } from '../interfaces/post';
import { POSTS } from '../data/mock-posts';

// import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostsService {
  private postsUrl = 'api/posts';  // URL to web api

  constructor(private http: Http) { }

  getPosts(): Promise<Post[]> {
    return this.http.get(this.postsUrl)
               .toPromise()
               .then(response => response.json().data as Post[])
               .catch(this.handleError);
  }

  getPost(id: number): Promise<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().data as Post)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
