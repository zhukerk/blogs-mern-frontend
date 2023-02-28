import { IUser } from './User.interface';

export interface IPost {
    _id: string;
    title: string;
    text: string;
    tags: string[];
    viewCount: number;
    createdAt: string;
    user: IUser;
}
