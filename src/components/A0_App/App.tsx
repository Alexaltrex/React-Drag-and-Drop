import React from 'react';
import style from "./App.module.scss";
import {Header} from "../A1_Header/Header";
import {Route, Routes } from 'react-router-dom';
import {routes} from "../A1_Header/routes";

export const App = () => {
  return (
    <div className={style.app}>
        <Header/>
        <main className={style.main}>
            <Routes>
                {
                    routes.map(({path, element}, index) => (
                        <Route key={index} path={path} element={element}/>
                    ))
                }
            </Routes>
        </main>
    </div>
  );
}

