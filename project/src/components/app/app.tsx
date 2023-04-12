import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Home from '../../pages/home/home';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { AppRoute } from '../../const/const';

const App: React.FC = () => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Home />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Property} element={<Property />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);
export default App;
