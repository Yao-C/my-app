import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2>Brukere og rettigheter</h2>
  },
  {
    path: "/feltverver",
    main: () => <h2>Feltverver</h2>
  },
  {
    path: "/innstillinger",
    main: () => <h2>Innstillinger</h2>
  }
];

function SideBar() {
  return (
    <Router>
      <div className="flex h-100">
        <div className="sidebar-left h-100">
          <ul>
            <li className="sidebar-line mb3">
              <Link to="/">Brukere og rettigheter</Link>
            </li>
            <li className="sidebar-line pt3 pb3">
              <Link to="/feltverver">Feltverver</Link>
            </li>
            <li className="mt3">
              <Link to="/innstillinger">Innstillinger</Link>
            </li>
          </ul>

          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
        </div>

        <div className="main flex-grow">
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default SideBar;