import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useLocation } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MainContent from 'components/MainContent';

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
        <MainContent />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
