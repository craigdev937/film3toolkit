import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NotFound } from "../components/NotFound";
import { Films } from "../containers/Films";
import { Details } from "../containers/Details";

export const Main = () => (
    <BrowserRouter>
    <React.Fragment>
        <Header />
        <main className="container">
            <Routes>
                <Route path="/" element={<Films />} />
                <Route path="/film/:idmbID" element={<Details />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
    </React.Fragment>
    </BrowserRouter>
);


