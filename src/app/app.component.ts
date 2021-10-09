import { Component } from '@angular/core';
import { PostService } from './services/post.service';
import { Post } from './models/post';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    posts$: Observable<Post[]> = this.postService.posts$;
    inProgress$: Observable<boolean> = this.postService.inProgress$;
    selectedPostIDs$: Observable<number[]> = this.postService.selectedPostIDs$;

    constructor(private postService: PostService) {}

    selectPost(post: Post): void {
        this.postService.SelectPost(post);
    }
}
