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
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);
  return (
    <header className="bg-primary py-6 fixed w-full top-4 z-40 lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 lg:mb-0 ">
          {/* menu */}
          <div
            onClick={() => setCatNavMobile(true)}
            className="text-3xl xl:hidden cursor-pointer">
            <FiMenu />
          </div>
          <div
            className={`${
              catNavMobile ? "left-0" : "-left-full"
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}>
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          {/* logo */}
          <Link to={"/"}>
            <img src={Logo} />
          </Link>
          <div className="hidden w-full xl:flex xl:max-w-[734px]">
            <SearchForm />
          </div>

          {/* phone and cart */}
          <div className="flex items-center gap-x-[10px]">
            {/* phone */}
            <div className="hidden xl:flex uppercase">
              Need help ? 123 456 789{" "}
            </div>
            <div className="relative cursor-pointer">
              <SlBag onClick={() => setIsOpen(true)} className="text-2xl" />
              {/* amount */}
              <div
                className="bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px]
               flex justify-center items-center font-bold tracking-[-0.1rem]">
                {itemAmount}
              </div>
            </div>
            {/* cart */}
            <div
              className={`
            ${isOpen ? "right-0" : "-right-full"}
            bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 
          md:max-w-[500px] transition-all duration-300`}>
              <Cart />
            </div>
          </div>
        </div>
        {/* search form -show on mobile only */}
        <div className="lg:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
