import React, { useContext, useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { GlobalContext } from '../../context/GlobalContext';
import './index.css';

const Header = () => {
  const { searchTerm, setSearchTerm } = useContext(GlobalContext);
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className='top-header'>
        <div>{' '}</div>
        <p>Free Shipping on Order above 999/-</p>
        <p className='call-us'>Call us on: +91 98769 05120</p>
      </div>
      <div className='header-con'>
        <div className='logo-con'>
          <img src='https://res.cloudinary.com/drpddho9b/image/upload/v1729267872/image_55_rwwrfy.png' alt='logo' />
          <h1>Chaperone</h1>
        </div>
        <div className='menu-con'>
          <p>Home</p>
          <p style={{ color: '#F3A939' }}>Plants & Pots</p>
          <p>Tools</p>
          <p>Our Services</p>
          <p>Blog</p>
          <p>Our Story</p>
          <p>FAQs</p>
        </div>

        <div className='icons-con' style={{ gap: '45px' }}>
          <div className='logo-sub-con'>
            <CgProfile fontSize={24} />
            <p>My Profile</p>
          </div>
          <div className='logo-sub-con'>
            <AiOutlineShoppingCart fontSize={24} />
            <p>Cart</p>
          </div>
        </div>

        <div className='hamburger-icon' onClick={toggleMenu}>
          {menuOpen ? <IoMdClose /> :<GiHamburgerMenu  /> }
        </div>
      </div>

      <div className={`menu-dropdown ${menuOpen ? 'open' : ''}`}>
        <div className='menu-items'>
          <p>Home</p>
          <p>Plants & Pots</p>
          <p>Tools</p>
          <p>Our Services</p>
          <p>Blog</p>
          <p>Our Story</p>
          <p>FAQs</p>
          <div className='logo-sub-con'>
            <CgProfile fontSize={24} />
            <p>My Profile</p>
          </div>
          <div className='logo-sub-con'>
            <AiOutlineShoppingCart fontSize={24} />
            <p>Cart</p>
          </div>
        </div>
      </div>

      <div className='search-con'>
        <BiSearch fontSize={24} style={{ margin: '0', padding: '0' }} />
        <input className='search-input'
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <img className='leaf-img' src='https://res.cloudinary.com/drpddho9b/image/upload/v1729354455/image_91_epvag3.png' alt='leaf' />
      </div>
    </div>
  );
};

export default Header;
