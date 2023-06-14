import { Box, Typography } from '@mui/material';
import {
  activeStyleLink,
  links,
  pendingStyleLink,
} from './navigation.constants';
import styles from './navigation.module.scss';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Box className={styles.navBar}>
      <Typography variant="h4" color="white">
        Тестовое задание
      </Typography>
      {links.map(({ to, name, icon }) => (
        <Box key={to} className={styles.navList}>
          <NavLink
            to={to}
            className={styles.navLinkContainer}
            style={({ isActive }) =>
              isActive ? activeStyleLink : pendingStyleLink
            }
          >
            <Box className={styles.navLickIcon}>{icon}</Box>
            <Box className={styles.navLickName}>{name}</Box>
          </NavLink>
        </Box>
      ))}
    </Box>
  );
};
