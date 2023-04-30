import React, { useContext } from "react";

import Logo from "../img/logo.png";
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";

import { Link } from "react-router-dom";

//component
import SearchForm from "../components/SearchForm.js";
import CategoryNavMobile from "../components/CategoryNavMobile.js";
import Cart from "../components/Cart.js";

import { CartContext } from "../context/CartContext";
const Header = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  return (
    <header>
      <div className="container mx-auto">
        <div>
          {/* menu */}
          <div>
            <FiMenu />
          </div>
          {/* category nav mobile  */}
          <div>
            <CategoryNavMobile />
          </div>
          {/* logo */}
          <Link to={"/"}>
            <img src={Logo} />
          </Link>
          {/* search form show only destop*/}
          <div className="hidden w-full xl:flex xl:max-w-[734px] ">
            <SearchForm />
          </div>
        </div>
        {/* searchform show only mobile */}
        <div className="lg:hidden">
          <SearchForm />
        </div>

        <div>
          <div>Need help? 123456789</div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer">
            <SlBag className="text-2xl" />
            <div>2</div>
          </div>
          <div
            className={`
            ${isOpen ? "right-0" : "-right-full"}
            bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 
          md:max-w-[500px] transition-all duration-300`}>
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
