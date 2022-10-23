import {HashRouter} from "react-router-dom";
import {App} from "./App";
import React, {createContext} from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {RootStore, store} from "../../store/RootStore";

export const StoreContext = createContext<RootStore>({} as RootStore)

export const AppContainer = () => {
    return (
        <StoreContext.Provider value={store}>
            <DndProvider backend={HTML5Backend}>
                <HashRouter>
                    <App/>
                </HashRouter>
            </DndProvider>
        </StoreContext.Provider>

    )
}
