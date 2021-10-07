import { Component } from '@angular/core';
import { PostService } from './services/post.service';
import { Post } from './models/post';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    posts: Post[] = [];
    constructor(private postService: PostService) {
        this.postService.GetPosts().subscribe((posts) => {
            this.posts = posts.map((p) => {
                p.body = p.body.length > 180 ? p.body.slice(0, 180) + '...' : p.body;
                return p;
            });
        });
    }
}
