import React, {FC} from "react";
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import clsx from "clsx";
import {useDrag} from "react-dnd";
import {ItemType} from "../../../types/dnd.types";
import style from "./Brush.module.scss"

interface ICollectedProps {
    isDragging: boolean
}

export interface IBrushItem {
    color: string
}

interface IBrush extends IBrushItem {
    className?: string
}

export const Brush: FC<IBrush> = ({color, className}) => {
    const [{isDragging}, dragSourceRef] = useDrag<any, any, ICollectedProps>({
        type: ItemType.Brush,
        item: {color},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        end: (item, monitor) => { //(optional) обработчик конца перетаскивания
            //console.log(item)
            //console.log(monitor.getDropResult())
        },
    })

    return (
        <div ref={dragSourceRef}>
            <FormatPaintIcon sx={{color, fontSize: 60}}
                             className={clsx(
                                 {
                                     [style.brush]: true,
                                     [style.brush_isDragging]: isDragging,
                                 },
                                 Boolean(className) && className
                             )}

            />
        </div>

    )
}
