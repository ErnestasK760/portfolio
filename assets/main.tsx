import React, { FunctionComponent } from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import { HomeComponent } from './components/HomeComponent';
import ReactDOM from 'react-dom';
import './styles/app.css';
import './styles/app.scss';
import './bootstrap';

const App: FunctionComponent = () => {
    return (
        <Router>
        <HomeComponent />
        </Router>
    );
};

const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);
root.render(<App />);
