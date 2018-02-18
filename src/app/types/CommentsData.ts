import { Comment } from './comment';
import { User } from './user';

export interface CommentsData {
    comments: Comment[];
    users: User[];
}