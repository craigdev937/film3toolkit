import React from "react";
import "./Header.css";
import user from "../img/user.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";

export const Header = () => {
    const dispatch = useDispatch();
    const [term, setTerm] = React.useState("");

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(API.getFilms(term));
        dispatch(API.fetchShows(term));
    };

    return (
        <main className="header">
            <section className="logo">
                <Link to="/">Film App</Link>
            </section>
            <section className="search">
                <form 
                    className="search__form" 
                    onSubmit={handleSubmit}
                >
                    <input 
                        className="search__input"
                        type="text" 
                        value={term}
                        placeholder="Type Film or TV Show"
                        onChange={handleChange}
                    />
                    <button 
                        className="search__btn" 
                        type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </section>
            <section className="user">
                <img 
                    className="user__image"
                    src={user} alt="image"  
                />
            </section>
        </main>
    );
};



