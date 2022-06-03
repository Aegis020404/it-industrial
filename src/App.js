import React from "react";
import MainPage from "./pages/MainPage";
import './style/normalize.css';
import './style/main.css'
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";



function App() {

    return (
        <BrowserRouter >
            <Header />
            <AppRouter />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
