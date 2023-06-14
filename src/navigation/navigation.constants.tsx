import { ReactComponent as MessagesIcon } from './assets/MessagesIcon.svg';

export const activeStyleLink = {
  textDecoration: 'none',
  color: '#FFFFFF',
  backgroundColor: '#D8E4FB52',
  borderLeft: '3px solid #002CFB',
};

export const pendingStyleLink = {
  textDecoration: 'none',
  color: '#FFFFFF',
};

export const links = [
  {
    to: '/',
    name: 'Посты',
    icon: <MessagesIcon />,
  },
];
