import React, { useContext } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { MdCurrencyRupee } from "react-icons/md";

import { GlobalContext } from '../../context/GlobalContext';
import './index.css';

// Set app element for accessibility
Modal.setAppElement('#root');

const ProductModal = () => {
  const { isModalOpen, setIsModalOpen, selectedProduct } = useContext(GlobalContext);
  const navigate = useNavigate(); // Initialize navigate

  const handleConfirmClick = () => {
    setIsModalOpen(false); // Close the modal
    navigate('/cart'); // Navigate to the cart page
  };

  // Modal custom styles moved to CSS file using class names
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      className="custom-modal-content"
      overlayClassName="custom-modal-overlay"
      contentLabel="Product Modal"
    >
      {selectedProduct && (
        <div className='modal-con'>
          <h2>{selectedProduct.title}</h2>
          <p>{selectedProduct.description}</p>
          <img src={selectedProduct.image} alt={selectedProduct.title} className='product-img' />
          <div className='price'><span>Price :</span><MdCurrencyRupee /><p>{selectedProduct.price}</p></div>

          <div className="modal-buttons">
            <button className='confirm-btn' onClick={handleConfirmClick}>Confirm Add to Cart</button>
            <button className='close-btn' onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ProductModal;
