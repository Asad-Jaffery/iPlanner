import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Firebase.js";
import "../css/project-styling.css";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <div className="appName">
              <Link to="/planner">
                <img src="/img/iSchool_logo.png" alt="iSchool logo" />
                Planner
              </Link>
            </div>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/login">Sign in</Link>
          </li>
          <li>
            <div className="user-info">{user ? user.email : "Guest"}</div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
