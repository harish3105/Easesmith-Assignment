import React, { createContext, useState, useEffect } from 'react';
import data from '../products/data'; // Import dummy data

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Use local dummy data instead of fetching from API
    setProducts(data);
  }, []);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <GlobalContext.Provider
      value={{
        products,
        searchTerm,
        setSearchTerm,
        handleAddToCart,
        selectedProduct,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
