import React, {FC, useEffect} from "react";
import style from "./Container.module.scss";
import {IListItem} from "../TwoLists";
import {ListItem} from "../ListItem/ListItem";
import {useDrop} from "react-dnd";
import clsx from "clsx";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";
import {ItemType} from "../../../types/dnd.types";

interface IContainer {
    sourceType: string
    targetType: string
    label: string
    //items: IListItem[]
    //onDropHandler: (item: IListItem) => void
}

export const Container: FC<IContainer> = observer(({
                                                       sourceType,
                                                       targetType,
                                                       label,
                                                       //items,
                                                       //onDropHandler
                                                   }) => {
    const {
        twoListStore: {
            leftList,
            rightList,
            addToLeftList,
            addToRightList,
            removeFromLeftList,
            removeFromRightList

        }
    } = useStore();

    const onDropHandler = (item: IListItem) => {

        if (targetType === ItemType.LeftListItem) {
            addToLeftList(item);
            removeFromRightList(item);
        } else {
            addToRightList(item);
            removeFromLeftList(item);
        }
    }

    const [{canDrop, isOver}, dropTargetRef] = useDrop<IListItem, any, any>(() => ({
        accept: targetType,
        drop: (item, monitor) => {
            onDropHandler(item);
            return ({result: "result"})
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))


    return (
        <div className={clsx({
            [style.container]: true,
            [style.container_canDrop]: canDrop,
        })}
             ref={dropTargetRef}
        >
            <p className={style.label}>{label}</p>
            <div>
                {
                    (
                        targetType === ItemType.LeftListItem ? leftList : rightList
                    )
                        .map((item, index) => (
                            <ListItem key={index}
                                      item={item}
                                      type={sourceType}
                            />
                        ))
                }
            </div>
        </div>
    )
})
