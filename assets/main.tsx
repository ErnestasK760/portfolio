import React, { FunctionComponent } from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeComponent } from './components/HomeComponent';
import { NavbarComponent } from './components/NavbarComponent';
import ReactDOM from 'react-dom';
import './styles/app.css';
import './styles/app.scss';
import './bootstrap';
// @ts-ignore
import Experience from "/assets/experience/experience.js";

const App: FunctionComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <NavbarComponent />} />
                <Route path="/" element={ <HomeComponent /> }>
                </Route>
            </Routes>
        </Router>
    );
};

const container = document.getElementById('root');
const experience = new Experience(document.querySelector(".experience-canvas"));
// @ts-ignore
const root = createRoot(container);
root.render(<App />);
