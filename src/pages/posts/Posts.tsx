import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store.hooks';
import { getPosts, getUsers } from '../../model';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Post } from '../../model/posts/posts.interface';
import { Header } from '../../components/header';
import { selectPost } from '../../model/posts/posts.slice';

export const Posts = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const posts = useAppSelector((store) => store.postsReducer.data);

  useEffect(() => {
    dispatch(getPosts('posts'));
    dispatch(getUsers());
  }, [dispatch]);

  const handleOpenDetails = (post: Post) => () => {
    dispatch(selectPost(post));
    navigate('/details');
  };

  return (
    <>
      <Header />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Posts Title</TableCell>
              <TableCell>Author ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <TableRow
                key={post.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  cursor: 'pointer',
                }}
              >
                <TableCell
                  onClick={handleOpenDetails(post)}
                  component="th"
                  scope="row"
                >
                  {post.title}
                </TableCell>
                <TableCell component="th" scope="row">
                  {post.userId}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
