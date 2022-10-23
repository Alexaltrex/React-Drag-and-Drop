import React from "react";
import {Link} from "react-router-dom";
import style from "./Header.module.scss";
import {links} from "./routes";

export const Header = () => {
    return (
        <header className={style.header}>
            <Link to="/"
                  className={style.logo}
            >
                DnD
            </Link>
            <nav className={style.links}>
                {
                    links.map(({to, label}, index) => (
                        <Link key={index}
                            to={to}
                              className={style.link}
                        >
                            {label}
                        </Link>
                    ))
                }
            </nav>
        </header>
    )
}
