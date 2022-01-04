// Mi Router Principal 
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Hay que implementar el BrowserRouter desde el punto mas alto , para que funcione lso Routers 
import { BrowserRouter } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const AppRouter = () => {
   return (
      <BrowserRouter>
         <h1>Welcome to React Router!</h1>
         <Routes>
            <Route path="/" element={<MarvelScreen />} />
            <Route path="/marvel" element={<MarvelScreen />} />
            <Route path="/dc" element={<DcScreen />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/login" element={<LoginScreen />} />
         </Routes>
      </BrowserRouter>
   )
}
