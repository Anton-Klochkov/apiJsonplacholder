export interface CommentResponse {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface CommentsSlice {
  comments: CommentResponse[];
  loading: boolean;
  error?: string;
}
