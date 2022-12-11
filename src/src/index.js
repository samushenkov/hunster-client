import React from 'react';
import { createRoot } from 'react-dom/client';

import { AppView } from './views/AppView';

const appView = (
    <React.StrictMode>
        <AppView />
    </React.StrictMode>
);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(appView);