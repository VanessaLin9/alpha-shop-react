import { memo } from 'react';
import './header.scss';

const Header = memo(() => {
  return (
    <section data-name="Header">
      <header className="site-header">
        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#boys">
                男款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#girls">
                女款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#new">
                最新消息
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#top">
                客製商品
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#us">
                聯絡我們
              </a>
            </li>
          </ul>

          <ul className="nav-list site-action-list">
            {/* <!-- search --> */}
            <li className="nav-item">
              <a href="#search">
                <i className="fas fa-search" />
              </a>
            </li>
            {/* <!-- cart --> */}
            <li className="nav-item">
              <a href="#cart">
                <i className="fas fa-shopping-cart" />
              </a>
            </li>
            <li id="theme-toggle" className="nav-item">
              <a href="#moon">
                <i className="fas fa-moon" />
              </a>
            </li>
          </ul>
        </nav>
        <a className="header-logo-container" href="#logo">
          <img src="" alt="" className="icon-logo  cursor-point" />
          <h4 className="logo-title">ALPHA shop</h4>
        </a>
      </header>
    </section>
  );
});
export default Header;
