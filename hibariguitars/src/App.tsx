import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, useLocation } from 'react-router-dom';
import GuitarPage from 'components/GuitarPage';
import Header from 'components/Header';
import Footer from 'components/Footer';

const queryClient = new QueryClient();

function App() {
  const [ page, setPage ] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  const prevPage = () => {
    if (page !== 0) {
      setPage(page - 1)
    }
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  return (
    <QueryClientProvider client = {queryClient}>
      <div className = "flex flex-col min-h-screen">
        <Header />
        <GuitarPage page = {page} />
        <button onClick = {prevPage}>Previous</button>
        <button onClick = {nextPage}>Next</button>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
