import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <ul className="navigation">
                    <li className="navigationitem"><NavLink className="navigationitemlink" activeClassName="activenavigationitemlink" to="/home">HOME</NavLink></li>
                    <li className="navigationitem"><NavLink className="navigationitemlink" activeClassName="activenavigationitemlink" to="/posts">POSTS</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};