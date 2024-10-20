import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import dummyProducts from '../../products/data'
import './index.css';

const ViewProductPage = () => {
  const [productData, setProductData] = useState(null); // Initialize as null to handle loading state
  const [loading, setLoading] = useState(true); // Loading state
  const { id } = useParams(); // Get the product ID from the URL

  useEffect(() => {
    const fetchProductData = () => {
      const prodData = dummyProducts.find(product => product.id === parseInt(id));
      setProductData(prodData);
      setLoading(false);
    };

    fetchProductData();
  }, [id]);

  return (
    <div className='thankyou-con'>
      {loading ? (
        <div className="loading-container">
          <p>Loading product details...</p>
        </div>
      ) : (
        productData && (
          <div className='thankyou-sub-con'>
            <p className='tq-main'>Thank you!</p>
            <img className='smilee-img'
              src='https://res.cloudinary.com/drpddho9b/image/upload/v1729280845/download-removebg-preview_ixb7lb.png' alt='smilee' />
            <p className='tq-para'>Thank you for showing interest in <span className='name'>{productData.title}</span>. <br /> But there are yet many products for you to discover!</p>
            <Link to='/'><button className='tq-button'>Continue Browsing</button></Link>
          </div>
        )
      )}
    </div>
  );
};

export default ViewProductPage;
