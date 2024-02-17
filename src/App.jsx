import { Routes, Route, Navigate } from 'react-router-dom';

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

function App() {
  return (
    <div className={styles.app}>
      <Header />

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

      <Footer />
    </div>
  );
}

export default App;
