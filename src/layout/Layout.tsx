import { Outlet } from 'react-router-dom';
import { Navigation } from '../navigation';
import styles from './Layout.module.scss';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = () => {
  return (
    <div className={styles.mainLayout}>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
