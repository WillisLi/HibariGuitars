import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, useLocation } from 'react-router-dom';
import GuitarPage from 'components/GuitarPage';
import Header from 'components/Header';
import Footer from 'components/Footer';

const queryClient = new QueryClient();

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  return (
    <QueryClientProvider client = {queryClient}>
      <div className = "flex flex-col min-h-screen">
        <Header />
        <GuitarPage />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
