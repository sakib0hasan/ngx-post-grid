import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    constructor(private http: HttpClient) {}

    GetPosts(): Observable<Post[]> {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        return this.http.get<Post[]>(url);
    }
}
