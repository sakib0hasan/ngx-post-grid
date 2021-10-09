import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { Post } from './models/post';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    posts: Post[] = [];
    inProgress = false;
    private ngUnsubscribe = new Subject();

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.inProgress = true;
        this.postService
            .GetPosts()
            .pipe(
                tap((posts) =>
                    posts.map((p) => ({
                        ...p,
                        body: p.body.length > 180 ? `${p.body.slice(0, 180)}...` : p.body,
                    })),
                ),
                takeUntil(this.ngUnsubscribe),
            )
            .subscribe((posts) => {
                this.posts = posts;
                this.inProgress = false;
            });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
