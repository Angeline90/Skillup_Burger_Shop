import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      { name: "Connexion", path: "/login" },
      {name:"Mes commandes", path:"/myorders"},
      {name:"Déconnexion", path:"/login"},
      {name:"Mon profil", path:"/me"}
      
    ];
    setNavLinks(navs);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
          
          </a>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              {navLinks.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button class="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DropdownMenu;