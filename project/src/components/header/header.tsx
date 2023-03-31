import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute } from '../../const/const';

type HeaderProps = {
  hasNav?: boolean;
};

const Header: React.FC<HeaderProps> = ({ hasNav = true }) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo type="header" />
        </div>
        {hasNav && (
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  to={AppRoute.Login}
                  className="header__nav-link header__nav-link--profile"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                    Oliver.conner@gmail.com
                  </span>
                  <span className="header__favorite-count">3</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">












    Check warning
        on line 33
        in project/src/components/header/header.tsx














    GitHub Actions / Check









    The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md







                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  </header>
);

export default Header;
