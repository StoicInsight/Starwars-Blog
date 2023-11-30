import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root.jsx';
import Creatures from './Components/Creatures.jsx';
import Characters from './Components/Characters.jsx';
import Locations from './Components/Locations.jsx';
import Character from './Components/Character.jsx';
import Creature from './Components/Creature.jsx';
import Location from './Components/Location.jsx';
import { FavoritesContext } from './Context.jsx';

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
        path: '/Creatures',
        element: <Creatures />,
      },
      {
        path: '/Locations',
        element: <Locations />,
      },
      {
        path: 'characters/:characterId',
        element: <Character />,
      },
      {
        path: 'species/:speciesId',
        element: <Creature />,
      },
      {
        path: 'planets/:planetId',
        element: <Location />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesContext>
      <RouterProvider router={router} />
    </FavoritesContext>
  </React.StrictMode>
);
