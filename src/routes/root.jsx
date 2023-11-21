import { Nav } from '../Data/NavigationData';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Root = () => {
  const [activeLink, setActiveLink] = useState('Characters');

  console.log(activeLink);

  return (
    <>
      <h1 className='browse'>Browse databank</h1>

      <div className='root'>
        <nav className='side-bar'>
          <h1>Browse</h1>
          <ul className='nav-items'>
            {Nav.map((el, key) => {
              console.log(el);
              return (
                <li
                  key={key}
                  onClick={() => setActiveLink(el.item)}
                  className={activeLink === el.item ? 'active-link' : null}
                >
                  <Link to={el.route}>{el.item}</Link>
                </li>
                // <h1>{el.item}</h1>
              );
            })}
          </ul>
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
