import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./../styles/navbar.css";

/**
 * TezKart Navbar - Premium UI Version
 */
const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="navbar">

            {/* ================= LOGO ================= */}
            <div className="logo">
                <span className="logo-tez">Tez</span>
                <span className="logo-kart">Kart</span>
            </div>

            {/* ================= HAMBURGER ================= */}
            <div className="hamburger" onClick={() => setOpen(!open)}>
                {open ? "✕" : "☰"}
            </div>

            {/* ================= MENU ================= */}
            <nav className={`menu ${open ? "active" : ""}`}>

                {/* LINKS */}
                <ul className="links">
                    <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/shop" onClick={() => setOpen(false)}>Shop</NavLink></li>
                    <li><NavLink to="/categories" onClick={() => setOpen(false)}>Categories</NavLink></li>
                    <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
                    <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
                </ul>

                {/* SEARCH */}
                <div className="search">
                    <input type="text" placeholder="Search products, brands..." />
                </div>

                {/* ACTIONS */}
                <div className="actions">
                    <div className="cart">🛒 Cart</div>
                    <button className="login">Login</button>
                    <button className="register">Sign Up</button>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;