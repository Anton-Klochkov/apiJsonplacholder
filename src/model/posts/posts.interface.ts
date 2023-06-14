import type { PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  userId: number | null;
  id: number | null;
  title: string;
  body: string;
}

export type SelectPost = Post | null;

export type SelectPostPayload = PayloadAction<SelectPost>;

export interface PayloadPost {
  payload?: string | 'posts';
}

export interface PostsResponse {
  data: Post[];
}

export interface PostsSlice extends PostsResponse {
  selectPost: SelectPost;
  loading: boolean;
  error?: string;
}
