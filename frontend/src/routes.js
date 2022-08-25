import { Navigate, useRoutes } from 'react-router-dom';
import React, { useEffect } from 'react';
// layouts

import Material from './pages/Material';
import Home from './pages/Home';
// ----------------------------------------------------------------------

export default function Router() {




    return useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/material",
            element: <Material />
        },


    ]);
}
