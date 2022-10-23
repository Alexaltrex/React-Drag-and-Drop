import React from "react";
import style from "./TwoLists.module.scss"
import {Container} from "./Container/Container";
import {ItemType} from "../../types/dnd.types";

export interface IListItem {
    id: number,
    label: string
}

export const TwoLists = () => {
    return (
        <div className={style.twoLists}>
            <Container label="Left List"
                       sourceType={ItemType.RightListItem}
                       targetType={ItemType.LeftListItem}
            />

            <Container label="Right List"
                       sourceType={ItemType.LeftListItem}
                       targetType={ItemType.RightListItem}
            />
        </div>
    )
}
