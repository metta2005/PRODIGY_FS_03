import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:productId" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={
                <div className="pt-32 pb-12 text-center">
                  <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-2xl font-bold text-neutral-900 mb-4">Page Not Found</h1>
                    <p className="text-neutral-600">The page you're looking for doesn't exist.</p>
                  </div>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;