import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ViewProductPage from './components/ViewProductPage';
import ProductModal from './components/ProductModal';
import Cart from './components/Cart';


const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ViewProductPage />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
        <ProductModal />
      </Router>
    </GlobalProvider>
  );
};

export default App;
