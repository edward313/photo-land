import React, { useContext, useState } from "react";

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
  const [catNavMobile, setcatNavMobile] = useState(false);
  return (
    <header className="bg-primary  py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px] ">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 lg:items-center justify-center mb-4 lg:mb-0">
          {/* menu */}
          <div
            onClick={() => setcatNavMobile(true)}
            className="text-3xl xl:hidden cursor-pointer">
            <FiMenu />
          </div>
          {/* category nav mobile  */}
          <div
            className={`${
              catNavMobile ? "left-0" : "-left-full "
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}>
            <CategoryNavMobile setcatNavMobile={setcatNavMobile} />
          </div>
          {/* logo */}
          <Link to={"/"}>
            <img src={Logo} />
          </Link>
          {/* search form show only destop*/}
          <div className="hidden w-full xl:flex xl:max-w-[734px] ">
            <SearchForm />
          </div>
          <div className="flex items-center xl:flex xl:max-w-[734px]">
            <div className="hidden xl:flex uppercase">Need help? 123456789</div>
            {/* cart */}
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
      </div>
      {/* searchform show only mobile */}
      <div className="lg:hidden">
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
