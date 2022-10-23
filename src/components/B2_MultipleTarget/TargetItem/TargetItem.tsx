import React, {FC} from "react";
import style from "./TargetItem.module.scss";
import {useDrop} from "react-dnd";
import {IBrushItem} from "../../B1_SingleTarget/Brush/Brush";
import {ItemType} from "../../../types/dnd.types";
import clsx from "clsx";

interface ITargetItem {
    item: string

}


export const TargetItem: FC<ITargetItem> = ({item}) => {
    const [{ canDrop, isOver }, dropTargetRef] = useDrop<IBrushItem, any, any>(() => ({
        accept: item,
        drop: (item, monitor) => {
            //setColor(item.color)
            return ({result: "result"})
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    return (
        <div className={style.wrapper}>
            <div className={clsx({
                [style.targetItem]: true,
                [style[`targetItem_${item}`]]: true,
                [style.targetItem_canDrop]: canDrop,
                [style.targetItem_isOver]: isOver,
            })}
                 ref={dropTargetRef}
            />
        </div>

    )
}
