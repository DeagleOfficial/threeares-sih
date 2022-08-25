import { Navigate, useRoutes } from 'react-router-dom';
import React, { useEffect } from 'react';
// layouts

import Home from './pages/HomeSecondary';
import Material from './pages/Material';

// ----------------------------------------------------------------------

export default function Router() {




  return useRoutes([

    {
      path: "/",
      element: <Home />,

    },
    {
      path: "/material",
      element: <Material />,

    },
    // {
    //   path: "/",
    //   element: <Home />,

    // },


  ]);
}
