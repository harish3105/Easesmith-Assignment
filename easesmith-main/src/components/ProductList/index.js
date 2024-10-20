import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import ProductItem from '../ProductItem';
import Pagination from '../Pagination';
import Nursery from '../Nursery';
import { MdKeyboardArrowDown } from "react-icons/md";

import './index.css'
import Filters from '../Filters';
import Footer from '../Footer';

const ProductList = () => {
  const { products, searchTerm, handleAddToCart } = useContext(GlobalContext);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;



  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // Filter products based on the search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the index for slicing the products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
 
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

 

  return (
    <div>
      <div className='products-main-con'>
        <Nursery />
        <div className='filters-and-products'>
          <Filters />
          <div className='sort-prod-page'>
            <div className='sort-con'>
              <p >{filteredProducts.length} products</p>
              <button className='sort-button'>
                <p>SORT BY</p>
                <span><MdKeyboardArrowDown fontSize={25} /></span>
              </button>
            </div>
            <div className="product-list">
              {currentProducts.map(product => (
                <ProductItem key={product.id} product={product} onAddToCart={handleAddToCart} />
              ))}
            </div>
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={filteredProducts.length}
              paginate={paginate} 
            />
          </div>
        </div>


      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
