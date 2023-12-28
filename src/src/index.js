import React from 'react';

import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";

import { router } from 'services/router';

const appView = (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(appView);