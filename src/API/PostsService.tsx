import { axiosHost } from '.';
import {IPost} from '../interfaces/Post.interface';
import {Logger} from '../utils/Logger';

export default class PostsService {
    static async getAll(): Promise<IPost[]> {
        try {
            const res = await axiosHost.get<IPost[]>('/posts');

            return res.data;
        } catch (error) {
            Logger(error, 'PostService', 'getAll');
            return [];
        }
    }
}
