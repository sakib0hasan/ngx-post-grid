import { Component, Input } from '@angular/core';
import { Post } from '../../models/post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export class PostComponent {
    @Input()
    post: Post = { body: '', id: 0, title: '', userId: 0 };

    @Input()
    selected = false;

    constructor() {}
}
