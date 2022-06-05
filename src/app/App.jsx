import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Main } from "../routes/Main";
import { Reducer } from "../global/RootReducer";

export const App = () => {
    return (
        <React.Fragment>
            <Provider store={Reducer}>
                <Main />
            </Provider>
        </React.Fragment>
    );
};



