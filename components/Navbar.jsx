'use client'
import Link from "next/link";
import React from "react";
import { Search, ShoppingCart, CircleUserRound,Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];
const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <nav className="flex items-center justify-between p-4 text-[#07484A]">
      {/* LOGO */}
      <Link href="/">
        <img src="/logo.jpeg" alt="logo" className="h-15 bg-[#07484A]" />
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-6 ">
        {navItems.map((item)=>(
            <Link
            key={item.name}
            href={item.href}
            className="relative group text-[#70908B] hover:text-[#07484A] font-semibold"
          >
            {item.name}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#07484A] transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Icons */}
      <div className="flex gap-6 items-center  ">
        <Link href="/search">
          <Search className="text-[#07484A] hover:text-[#07484A]" />
        </Link>
        <Link href="/cart">
          <ShoppingCart className="text-[#07484A] hover:text-[#07484A]" />
        </Link>
        <Link href="/contact">
          <CircleUserRound className="text-[#07484A] hover:text-[#07484A]" />
        </Link>
      </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center justify-center">
            <button onClick={toggleMenu} className="text-[#07484A] border-2 border-[#07484A] rounded-md p-1">
                {isOpen ? (
                    <X className="text-[#07484A] hover:text-[#07484A]" onClick={toggleMenu} />
                ) : (
                    <Menu className="text-[#07484A] hover:text-[#07484A]" onClick={toggleMenu} />
                )}
            </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden flex flex-col gap-3 fixed top-0 right-[-120px] w-[250px]  mt-[90px] p-5 bg-[#07484A] text-white">
                {navItems.map((item) => (
                    <Link key={item.name} href={item.href}>
                        {item.name}
                    </Link>
                ))}
            </div>
        )}
    </nav>
  );
};

export default Navbar;
