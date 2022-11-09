import { memo } from 'react';

const Header = memo((props) => {
  const { handleTheme } = props;
  function themeToggle(e) {
    if (e.target.checked === true) {
      handleTheme('dark');
    } else {
      handleTheme('light');
    }
  }

  return (
    <section data-name="Header">
      <header className="header">
        <input type="checkbox" className="nav-toggle" id="navbar-toggle" />
        <nav className="navbar">
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

            {/* <!-- search --> */}
            <li className="nav-item item-icon">
              <a href="#search">
                <i className="fas fa-search" />
              </a>
              {/* <!-- cart --> */}
              <a href="#cart">
                <i className="fas fa-shopping-cart" />
              </a>
              <label id="theme-toggle">
                <input type="checkbox" onChange={themeToggle} />
                <i className="fas fa-moon" />
              </label>
            </li>
          </ul>
        </nav>
        <label htmlFor="navbar-toggle" className="navbar-toggle-label">
          <span className="hamburger" />
        </label>
        <a className="header-logo" href="#logo">
          <div className="header-logo-icon" />
        </a>
      </header>
    </section>
  );
});
export default Header;
