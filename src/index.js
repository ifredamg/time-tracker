import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NavigationProvider } from './context/navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <NavigationProvider>
        <App />
    </NavigationProvider>
);