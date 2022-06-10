import React from "react";
import "./FCard.css";
import { Link } from "react-router-dom";

export const FCard = (props) => {
    return (
        <main className="card">
            <Link to={`/film/${props.data.imdbID}`}>
                <section className="card__inner">
                    <aside className="card__top">
                        <img 
                            className="card__img"
                            src={props.data.Poster} 
                            alt={props.data.Title} 
                        />
                    </aside>
                    <aside className="card__bottom">
                        <div className="card__info">
                            <h4>{props.data.Title}</h4>
                            <p>Year: {props.data.Year}</p>
                        </div>
                    </aside>
                </section>
            </Link>
        </main>
    );
};


