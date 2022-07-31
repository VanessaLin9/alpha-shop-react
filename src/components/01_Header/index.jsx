import { memo } from 'react';
import './Header.css';

const Header = memo(() => {
  return (
    <section data-name="Header">
      <header className="site-header">
        {/* <div className="header-container"> */}

        {/* <!-- navbar-toggle --> */}
        {/* <input id="navbar-toggle" className="navbar-toggle" type="checkbox" /> */}
        {/* <label for="navbar-toggle" className="burger-container"> */}
        {/* <svg className="icon-toggle cursor-point"> */}
        {/* <use xlink:href="#svg-icon-toggle"></use> */}
        {/* </svg> */}
        {/* </label> */}

        {/* <!-- navbar-menu --> */}
        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                男款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                女款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                最新消息
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                客製商品
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                聯絡我們
              </a>
            </li>
          </ul>

          <ul className="nav-list site-action-list">
            {/* <!-- search --> */}
            <li className="nav-item">
              <a className="nav-icon cursor-point">
                <i className="fas fa-search" />
              </a>
            </li>
            {/* <!-- cart --> */}
            <li className="nav-item">
              <a className="nav-icon cursor-point">
                <i className="fas fa-shopping-cart" />
              </a>
            </li>
            <li id="theme-toggle" className="nav-item">
              {/* <!-- moon --> */}
              <a className="nav-icon cursor-point">
                <i className="fas fa-moon" />
              </a>
              {/* <!-- sun --> */}
              {/* <a className="nav-icon cursor-point">
               <i class="fas fa-sun"></i>
              </a> */}
            </li>
          </ul>
        </nav>

        {/* <!-- logo --> */}
        <a className="header-logo-container" href="#">
          <img src="" alt="" className="icon-logo  cursor-point" />
          <h4 className="logo-title">ALPHA shop</h4>
        </a>
        {/* </div> */}
      </header>
    </section>
  );
});
export default Header;
