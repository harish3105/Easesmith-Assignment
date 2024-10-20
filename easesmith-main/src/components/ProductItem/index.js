import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { IoMdStar } from "react-icons/io";

import './index.css';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="product-item">
      <div className='product-sub-item'>
        <div className='like-icon'>
          <FaRegHeart fontSize={20} />
        </div>

        <div>
          <img className='product-image' src={product.image} alt={product.title} />
          <Link to={`/product/${product.id}`}>
            <button className='view-button'>View Product</button>
          </Link>
        </div>
      </div>
      <div className='item-details-con'>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-desc">{product.description}</p>
        <div className='buttons-con'>
          <p className='product-name-old'><MdCurrencyRupee />359</p>
          <p className='product-name-new'><MdCurrencyRupee />{product.price}</p>
        </div>
        <div className='rating-con'>
          <div>
            <IoMdStar color='yellow' fontSize={25} />
            <IoMdStar color='yellow' fontSize={25} />
            <IoMdStar color='yellow' fontSize={25} />
            <IoMdStar color='yellow' fontSize={25} />
            <IoMdStar color='yellow' fontSize={25} />
          </div>
          <p className='product-name'>{product.rate}</p>
        </div>

        <div className='buttons-con'>
          <button className='item-button' onClick={() => onAddToCart(product)}>Add to Cart</button>
          <button className='rent-button'>Buy on Rent</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
