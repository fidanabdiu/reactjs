import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGGEDOUT } from "../store/Store";

export default function Header() {
    const dispatch = useDispatch();
    const logoutHandler = function () {
        dispatch({ type: LOGGEDOUT });
    };
    return (
        <header>
            <nav>
                <ul className="navigation">
                    <li className="navigationitem"><NavLink className="navigationitemlink" activeClassName="activenavigationitemlink" to="/home">HOME</NavLink></li>
                    <li className="navigationitem"><NavLink className="navigationitemlink" activeClassName="activenavigationitemlink" to="/posts">POSTS</NavLink></li>
                    <li className="navigationitem"><NavLink className="navigationitemlink" onClick={logoutHandler} to="">LOG OUT</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};