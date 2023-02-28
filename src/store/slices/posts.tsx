import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { axiosHost } from '../../API';
import { IPost } from '../../interfaces/Post.interface';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, thunkAPI) => {
    try {
        const { data } = await axiosHost.get<IPost[]>('/posts');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Failed to get posts');
    }
});

interface IPostState {
    posts: IPost[];
    isLoading: boolean;
    error: string;
}

const initialState: IPostState = {
    posts: [],
    isLoading: false,
    error: '',
};

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending.type]: (state) => {
            state.posts = [];
            state.isLoading = true;
        },
        [fetchPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
            state.isLoading = false;
        },
        [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
            state.posts = [];
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const postsReducer = postSlice.reducer;
