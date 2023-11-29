import { Nav } from '../Data/NavigationData';
import { useContext, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Context } from '../Context';

export const Root = () => {
  const [activeLink, setActiveLink] = useState('Characters');
  const [favoriteActive, setFavoriteActive] = useState(false);
  const trackContext = useContext(Context);

  console.log('track context', trackContext.favoriteItems);

  return (
    <>
      <div className='browse'>
        <h1>StarWars //</h1>
        <div
          className='drop-down'
          onMouseOver={() => setFavoriteActive(true)}
          onMouseLeave={() => setFavoriteActive(false)}
        >
          <button>
            Favorites <span>{trackContext.favoriteItems.length}</span>
          </button>
          <div
            className={`drop-menu ${favoriteActive ? null : 'hidden'}`}
            onMouseOver={() => setFavoriteActive(true)}
            onMouseLeave={() => setFavoriteActive(false)}
          >
            {trackContext.favoriteItems.length > 0 ? (
              trackContext.favoriteItems.map((item, key) => (
                <div className='favorite-name' key={key}>
                  <p>{item.name}</p>
                  <button
                    onClick={() => {
                      trackContext.removeFavorite(item),
                        console.log('removing', item);
                    }}
                  >
                    🗑️
                  </button>
                </div>
              ))
            ) : (
              <p>empty</p>
            )}
          </div>
        </div>
      </div>

      <div className='root'>
        <nav className='side-bar'>
          <h1>Browse</h1>
          <ul className='nav-items'>
            {Nav.map((el, key) => {
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
