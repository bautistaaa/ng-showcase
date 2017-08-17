import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export interface RedditPost {
    thumbnail: string;
    title: string;
    author: string;
    upvotes: number;
}

@Injectable()
export class HttpService {

    constructor(private _http: Http) { }

    getSafeRedditPosts(): Observable<RedditPost[]> {
        const url = 'https://www.reddit.com/r/programmerhumor.json?limit=10';
        let posts: RedditPost[] = [];
        // ...using get request
        return this._http
            .get(url)
            .map((res: Response) => res.json())
            .map(json => {
                const { data: { children } } = json; // json.data.child

                children.forEach(child => {
                    const { data: { author, ups, thumbnail, title } } = child; // child.data
                    let post: RedditPost = {
                        thumbnail: thumbnail,
                        upvotes: ups,
                        author: author,
                        title: title
                    };

                    posts.push(post);
                });

                return posts;
            });
        // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}
