import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { getPosts } from '../../model';
import { useAppDispatch, useAppSelector } from '../../store/store.hooks';
import { Select } from '../select';

export const Header = () => {
  const dispatch = useAppDispatch();

  const [selectUser, setSelectUser] = useState('');

  const handleClearSelect = () => {
    setSelectUser('');
    dispatch(getPosts('posts'));
  };

  useEffect(() => {
    if (selectUser.length >= 1) {
      dispatch(getPosts(`posts?userId=${selectUser}`));
    }
  }, [dispatch, selectUser]);

  const allUsers = useAppSelector(
    (state) => state.usersReducer.list.getUsers.users,
  );

  const userMenuProps = allUsers.map((el) => ({
    value: `${el.id}`,
    label: el.name,
  }));

  const handleSelectUser = (value: string) => {
    setSelectUser(value);
  };

  return (
    <div className={styles.headerContent}>
      <Select
        label="Выберите пользователя для просмотра его постов"
        size="small"
        fullWidth={false}
        value={selectUser}
        menuItems={userMenuProps ?? []}
        onChange={handleSelectUser}
        variant="outlined"
        endAdornment={
          selectUser ? (
            <IconButton
              onClick={handleClearSelect}
              sx={{ position: 'relative', right: '36px' }}
            >
              <CloseIcon />
            </IconButton>
          ) : (
            false
          )
        }
      />
    </div>
  );
};
