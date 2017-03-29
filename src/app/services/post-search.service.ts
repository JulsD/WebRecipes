import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Post } from '../interfaces/post';

@Injectable()
export class PostSearchService {
  constructor(private http: Http) {}

  search(term: string): Observable<Post[]> {
    return this.http
               .get(`app/posts/?title=${term}`)
               .map(response => response.json().data as Post[]);
  }
}
