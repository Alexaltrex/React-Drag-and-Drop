import React, {FC} from "react";
import style from "./SourceItem.module.scss"
import clsx from "clsx";
import {useDrag} from "react-dnd";

interface ICollectedProps {

}

interface IItem {
    item: string
}

interface ISourceItem extends IItem {
    className?: string
}

export const SourceItem: FC<ISourceItem> = ({item, className}) => {
    const [{}, dragSourceRef] = useDrag<any, any, ICollectedProps>({
        type: item,
        item: {type: item}
    })

    return (
        <div className={style.wrapper}>
            <div ref={dragSourceRef}
                 className={clsx(
                     style.sourceItem,
                     style[`sourceItem_${item}`],
                     Boolean(className) && className
                 )}
            />
        </div>

    )
}
