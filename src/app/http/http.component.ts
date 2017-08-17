import { Component, OnInit } from '@angular/core';
import { HttpService, RedditPost } from 'app/http/http.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-http',
    templateUrl: './http.component.html',
    styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

    posts: Observable<RedditPost[]>;

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.posts = this._httpService.getSafeRedditPosts();
    }

}
