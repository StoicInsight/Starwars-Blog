import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root.jsx';
import Planets from './Components/Planets.jsx';
import Creatures from './Components/Creatures.jsx';
import Characters from './Components/Characters.jsx';
import Species from './Components/Species.jsx';
import Locations from './Components/Locations.jsx';
import Vehicles from './Components/Vehicles.jsx';
import Character from './Components/Character.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/Characters',
        element: <Characters />,
      },
      {
        path: '/Planets',
        element: <Planets />,
      },
      {
        path: '/Species',
        element: <Species />,
      },
      {
        path: '/Creatures',
        element: <Creatures />,
      },
      {
        path: '/Locations',
        element: <Locations />,
      },
      {
        path: '/Vehicles',
        element: <Vehicles />,
      },
    ],
  },
  {
    path: '/Characters/Character:id',
    element: <Character />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
