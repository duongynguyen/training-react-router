import React from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    label: "Home",
    to: "/",
    exact: true
  },
  {
    label: "About",
    to: "/about",
    exact: false
  },
  {
    label: "Contact",
    to: "/contact",
    exact: false
  },
  {
    label: "Products",
    to: "/products",
    exact: false
  },
  {
    label: "Login",
    to: "/login",
    exact: false
  },
  {
    label: "Not Found",
    to: "/notfound",
    exact: false
  }
];

function MenuLink({ label, to, activeOnlyWhenExact }) {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        const activeClass = match ? "active" : "";
        return (
          <li className={`nav-item ${activeClass}`}>
            <Link className="nav-link" to={to}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
}

const showMenus = menus => {
  let result = null;

  if (menus.length > 0) {
    result = menus.map((menu, index) => (
      <MenuLink
        key={index}
        label={menu.label}
        to={menu.to}
        activeOnlyWhenExact={menu.exact}
      />
    ));
  }

  return result;
};

function Menu() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">{showMenus(menus)}</ul>
      </div>
    </nav>
  );
}

export default Menu;
