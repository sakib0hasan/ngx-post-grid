import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
    @Input()
    post: Post = { body: '', id: 0, title: '', userId: 0 };
    showUser = false;

    constructor() {}

    ngOnInit(): void {}

    cardClicked(): void {
        this.showUser = !this.showUser;
    }
}
