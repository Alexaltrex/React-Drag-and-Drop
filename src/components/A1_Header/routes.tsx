import React from "react";
import {Home} from "../B0_Home/Home";
import {SingleTarget} from "../B1_SingleTarget/SingleTarget";
import {MultipleTarget} from "../B2_MultipleTarget/MultipleTarget";
import {VerticalList} from "../B3_VerticalList/VerticalList";
import {HorizontalList} from "../B4_HorizontalList/HorizontalList";
import {TwoLists} from "../B5_TwoLists/TwoLists";

export const routes = [
    {
        path: "/",
        label: "Home",
        element: <Home/>
    },
    {
        path: "/singleTarget",
        label: "Single Target",
        element: <SingleTarget/>
    },
    {
        path: "/multipleTarget",
        label: "Multiple Target",
        element: <MultipleTarget/>
    },
    {
        path: "/verticalList",
        label: "Vertical List",
        element: <VerticalList/>
    },
    {
        path: "/horizontalList",
        label: "Horizontal List",
        element: <HorizontalList/>
    },
    {
        path: "/twoLists",
        label: "Two Lists",
        element: <TwoLists/>
    },
]
export const links = routes.map(({path, label}) => ({to: path, label}))
