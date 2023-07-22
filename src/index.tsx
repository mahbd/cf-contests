import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import { store } from './data/store';
import Codeforces from "./Codeforces";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Codeforces />
        </Provider>
    </React.StrictMode>
);
