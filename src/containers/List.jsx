import React from "react";
import "./List.css";
import { useSelector } from "react-redux";
import { FCard } from "../components/FCard";

export const List = () => {
    const films = useSelector((state) => state.films.films);
    let renderFilms = "";
    renderFilms = films.Response === "True" ? 
    (
        films.Search.map((film, index) => (
            <FCard key={index} data={film} />
        ))
    ) : (
        <section className="film-error">
            <h3>{films.Error}</h3>
        </section>
    );

    return (
        <main>
            <section className="film-list">
                <h2>Films</h2>
                <aside className="film-container">
                    {renderFilms}
                </aside>
            </section>
        </main>
    );
};



