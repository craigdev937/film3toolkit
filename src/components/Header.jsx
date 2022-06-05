import React from "react";
import "./Header.css";
import user from "../img/user.png";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <main className="header">
            <Link to="/">
                <section className="logo">Films</section>
            </Link>
            <section className="user">
                <img 
                    className="user__image"
                    src={user} alt="image"  
                />
            </section>
        </main>
    );
};



