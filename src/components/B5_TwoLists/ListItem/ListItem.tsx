import React, {FC} from "react";
import style from "./ListItem.module.scss";
import {IListItem} from "../TwoLists";
import {useDrag} from "react-dnd";
import clsx from "clsx";

interface IListItemComponent {
    type: string
    item: IListItem
}

export const ListItem:FC<IListItemComponent> = ({type, item}) => {
    const [{isDragging}, dragSourceRef] = useDrag<any, any, {isDragging: boolean}>({
        type,
        item,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        end: (item, monitor) => { //(optional) обработчик конца перетаскивания
            //console.log(item)
            //console.log(monitor.getDropResult())
        },
    })

    return (
        <div ref={dragSourceRef}
            className={clsx({
                [style.listItem]: true,
                [style.listItem_isDragging]: isDragging,
            })}
        >
            {item.label}
        </div>
    )
}
