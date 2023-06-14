import styles from './App.module.scss';
import { Layout } from './layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Posts, Details, NotFoundPage } from './pages';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Box } from '@mui/material';

function App() {
  return (
    <Box className={styles.appContainer}>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Posts />} />
              <Route path="/details" element={<Details />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </Box>
  );
}

export default App;
