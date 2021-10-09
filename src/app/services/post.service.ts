import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { AppState } from '../models/state';
import { StateService } from './state.service';

const initialState: AppState = {
    Posts: [],
    SelectedPostIDs: [],
    InProgress: true,
};

@Injectable({
    providedIn: 'root',
})
export class PostService extends StateService<AppState> {
    posts$: Observable<Post[]> = this.select((state) => state.Posts);
    selectedPostIDs$: Observable<number[]> = this.select((state) => state.SelectedPostIDs);
    inProgress$: Observable<boolean> = this.select((state) => state.InProgress);

    constructor(private http: HttpClient) {
        super(initialState);

        this.LostPosts();
    }

    LostPosts(): void {
        this.setState({ InProgress: true });
        this.LoadPostsFromAPI().subscribe((posts) => {
            this.setState({ Posts: [...this.state.Posts, ...posts] });
            this.setState({ InProgress: false });
        });
    }

    SelectPost(post: Post): void {
        if (this.state.SelectedPostIDs.find((p) => p === post.id)) {
            this.setState({ SelectedPostIDs: this.state.SelectedPostIDs.filter((p) => p !== post.id) });
        } else {
            this.setState({ SelectedPostIDs: [...new Set([...this.state.SelectedPostIDs, post.id])] });
        }
    }

    LoadPostsFromAPI(): Observable<Post[]> {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        return this.http.get<Post[]>(url);
    }
}
