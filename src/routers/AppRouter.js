// Mi Router Principal 
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Hay que implementar el BrowserRouter desde el punto mas alto , para que funcione lso Routers 3
// Y no es necesario colocarlo en las routas hijas. 
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/*" element={<DashboardRoutes />} />
         </Routes>
      </BrowserRouter>
   )
}
