import {
  Alert,
  Button,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store.hooks';
import CloseIcon from '@mui/icons-material/Close';
import { getCommentsById, getUserById } from '../../model';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../model/posts/posts.interface';
import { clearSelectedPost } from '../../model/posts/posts.slice';

export const Details = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

  const userDetails = useAppSelector(
    (state) => state.usersReducer.list.getUsersById.userById,
  );
  const commentsByPost = useAppSelector(
    (store) => store.commentsReducer.comments,
  );

  const selectedPost: Post | null = useAppSelector(
    (state) => state.postsReducer.selectPost,
  );

  useEffect(() => {
    if (!selectedPost) navigate('/');
  }, [navigate, selectedPost]);

  useEffect(() => {
    if (selectedPost && selectedPost.userId && selectedPost.id) {
      dispatch(getUserById(selectedPost.userId));
      dispatch(getCommentsById(selectedPost.id));
    }
  }, [dispatch, selectedPost]);

  const handleChangeStepBack = () => {
    dispatch(clearSelectedPost());
    navigate(-1);
  };

  const toggleBar = () => {
    setIsOpenSnackbar((prev) => !prev);
  };

  return (
    <>
      <Card
        sx={{
          backgroundColor: '#515151',
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          position: 'relative',
          overflowY: 'auto',
        }}
      >
        <IconButton
          sx={{ position: 'absolute', top: 0, right: 0 }}
          onClick={handleChangeStepBack}
        >
          <CloseIcon />
        </IconButton>
        <CardContent>
          <Typography variant="h5" color="white">
            {`Имя: ${userDetails?.name}`}
          </Typography>
          <Typography color="white">{`Почта: ${userDetails?.email}`}</Typography>
          <Typography color="white">{`Номер телефона: ${userDetails?.phone}`}</Typography>
        </CardContent>
        <CardContent>
          <Typography
            sx={{ textAlign: 'center' }}
            variant="h5"
            color="white"
          >{`Заголовок: ${selectedPost?.title}`}</Typography>
          <Typography color="white">{selectedPost?.body}</Typography>
        </CardContent>

        <CardContent>
          <List>
            {commentsByPost.map((el) => (
              <ListItem
                sx={{
                  flexDirection: 'column',
                  color: 'white',
                  display: 'list-item',
                  listStyle: 'inside',
                }}
                divider
                key={el.id}
              >
                {el.name}
                <ListItemText>{el.body}</ListItemText>
              </ListItem>
            ))}
          </List>
        </CardContent>

        <CardContent
          sx={{
            bottom: 0,
            background: '#b3b3b3',
            width: '90%',
            padding: '0 12px 12px 12px',
            border: '1px solid #fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <TextField
            fullWidth
            sx={{ margin: '12px 0' }}
            label="Заголовок комментария"
            size="small"
            inputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            label="Комментарий"
            fullWidth
            variant="outlined"
            size="small"
            rows={4}
            multiline
            inputProps={{ style: { color: '#fff' } }}
          />
          <Button
            onClick={toggleBar}
            variant="contained"
            sx={{ width: '250px', margin: '12px 0' }}
          >
            Отправить комментарий
          </Button>
        </CardContent>
      </Card>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isOpenSnackbar}
        autoHideDuration={3000}
        onClose={toggleBar}
      >
        <Alert onClose={toggleBar} severity="success" sx={{ width: '100%' }}>
          {'Для отправки сообщения необходимо зарегистрироваться!)'}
        </Alert>
      </Snackbar>
    </>
  );
};
