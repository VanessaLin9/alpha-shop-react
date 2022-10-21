import { memo } from 'react';

const Header = memo(() => {
  return (
    <section data-name="Header">
      <header className="header">
        <nav className="nav-menu">
          <ul className="nav-list">
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

          <ul className="nav-list">
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
        <a className="header-logo" href="#logo">
          <div className="header-logo-icon" />
          <div className="header-logo-title" />
        </a>
      </header>
    </section>
  );
});
export default Header;
