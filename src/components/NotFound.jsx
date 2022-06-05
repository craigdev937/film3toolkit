import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <React.Fragment>
            <h1>NotFound</h1>
            <button>
                <Link to="/">Go Back</Link>
            </button>
        </React.Fragment>
    );
};



