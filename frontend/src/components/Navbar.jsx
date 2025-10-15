import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Products", "Stories", "Pricing"];
  const getLink = (item) => (item === "Home" ? "/" : `/${item.toLowerCase()}`);

  return (
    <Nav className={`${scrolled ? "scrolled" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex justify-between items-center h-20">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-bold transition ${
            scrolled ? "text-gray-900" : "text-black"
          }`}
        >
          MyBrand
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navItems.map((item) => (
            <Link
              key={item}
              to={getLink(item)}
              className={`transition ${
                scrolled
                  ? "text-gray-900 hover:text-gray-600"
                  : "text-black hover:text-gray-700"
              }`}
            >
              {item}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-gray-900 hover:bg-black text-white px-6 py-2 rounded-full font-medium transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <StyledSwitch>
            <input
              type="checkbox"
              id="checkbox"
              checked={menuOpen}
              onChange={() => setMenuOpen(!menuOpen)}
            />
            <label className="toggle" htmlFor="checkbox">
              <div className="bar bar--top"></div>
              <div className="bar bar--middle"></div>
              <div className="bar bar--bottom"></div>
            </label>
          </StyledSwitch>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden w-full py-4 flex flex-col items-center gap-4 shadow-lg transition ${
            scrolled ? "bg-white" : "bg-white/90 backdrop-blur-lg"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              to={getLink(item)}
              onClick={() => setMenuOpen(false)}
              className={`transition ${
                scrolled
                  ? "text-gray-900 hover:text-gray-600"
                  : "text-black hover:text-gray-700"
              }`}
            >
              {item}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-gray-900 hover:bg-black text-white px-6 py-2 rounded-full font-medium transition"
          >
            Contact Us
          </Link>
        </div>
      )}
    </Nav>
  );
};

export default Navbar;

/* Styled Components for Hamburger Toggle */
const StyledSwitch = styled.div`
  #checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    width: 40px;
    cursor: pointer;
    display: block;
    height: calc(4px * 3 + 11px * 2);
  }

  .bar {
    position: absolute;
    left: 0;
    right: 0;
    height: 4px;
    border-radius: 2px;
    background: #7b52b9;
    transition: all 0.35s cubic-bezier(0.5, -0.35, 0.35, 1.5);
  }

  .bar--top {
    bottom: calc(50% + 11px + 2px);
  }

  .bar--middle {
    top: calc(50% - 2px);
  }

  .bar--bottom {
    top: calc(50% + 11px + 2px);
  }

  #checkbox:checked + .toggle .bar--top {
    bottom: calc(50% - 11px - 4px);
    transform: rotate(45deg);
  }

  #checkbox:checked + .toggle .bar--middle {
    opacity: 0;
    top: calc(50% + 11px);
  }

  #checkbox:checked + .toggle .bar--bottom {
    top: calc(50% - 2px);
    transform: rotate(-45deg);
  }
`;

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 50;
  transition: all 0.3s;

  &.scrolled {
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;
