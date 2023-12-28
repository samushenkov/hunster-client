
import { createBrowserRouter } from "react-router-dom";

import { AppView } from 'views/AppView';

const routes = [
    {
        path: "/:profileId?",
        element: <AppView />
    },
];

export const router = createBrowserRouter(routes);