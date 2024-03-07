import { Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

// LAYOUTS
import MainLayout from './layouts/MainLayout';
// PAGES
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CarsPage from './pages/CarsPage';
import Error404Page from './pages/Error404Page';
// UI
import Header from './ui/header/Header';
import Footer from './ui/footer/Footer';
// STYLES
import styles from './App.module.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Navigate replace to='/home' />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/cars' element={<CarsPage />} />

            <Route path='*' element={<Error404Page />} />
          </Route>
        </Routes>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
