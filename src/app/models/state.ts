import { Post } from './post';

export interface AppState {
    Posts: Post[];
    SelectedPostIDs: number[];
    InProgress: boolean;
}
