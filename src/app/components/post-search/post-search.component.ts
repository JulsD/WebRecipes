import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
// import 'rxjs/add/observable/of';
// Observable operators
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
import { PostSearchService } from '../../services/post-search.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'post-search',
  templateUrl: './post-search.component.html',
  styleUrls: [ './post-search.component.scss' ],
  providers: [PostSearchService]
})
export class PostSearchComponent implements OnInit {
  posts: Observable<Post[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private postSearchService: PostSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.posts = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.postSearchService.search(term)
        // or the observable of empty posts if there was no search term
        : Observable.of<Post[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Post[]>([]);
      });
  }
}
