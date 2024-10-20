import React, { useState } from 'react';
import './index.css';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    paginate(nextPage);
  };

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <div className='pagination-con'>
      {currentPage < totalPages && (
        <button onClick={loadMore} className="view-more-btn">
          View More
        </button>
      )}
    </div>
  );
};

export default Pagination;
