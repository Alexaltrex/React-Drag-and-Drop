import React, {FC, useEffect, useRef} from "react";
import style from "./Card.module.scss";
import {useDrag, useDrop} from "react-dnd";
import {Identifier, XYCoord} from "dnd-core";
import {ItemType} from "../../../types/dnd.types";
import clsx from "clsx";

interface IDragItem {
    index: number
    id: string
    //type: string
}

export interface ICard {
    id: any
    src: string
    index: number
    moveCard: (dragIndex: number, hoverIndex: number) => void
    setDragging: (dragging: boolean) => void
}

export const Card: FC<ICard> = ({id, src, index, moveCard, setDragging}) => {
    const ref = useRef<HTMLDivElement>(null)

    // карточка как цель перетаскивание
    const [{handlerId}, dropTargetRef] = useDrop<IDragItem,
        void,
        { handlerId: Identifier | null }>({
        accept: ItemType.HorizontalListCard,
        // обработчик накрытия цели источником
        hover: (item, monitor) => {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index // индекс карточки, КОТОРАЯ перетаскивается и НАКРЫЛА другую карточку
            const hoverIndex = index // индекс карточки, которую накрыли
            if (dragIndex === hoverIndex) {
                return
            }

            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            // координата X середины карточки-цели
            const hoverMiddleX = 0.5 * (hoverBoundingRect.left + hoverBoundingRect.right);
            // Координаты указателя мыши = положение источника перетаскивания
            const clientOffsetX = (monitor.getClientOffset() as XYCoord).x;

            // если карточку не перетащила за накрытую ею карточку
            if (
                (dragIndex < hoverIndex && clientOffsetX < hoverMiddleX) ||
                (dragIndex > hoverIndex && clientOffsetX > hoverMiddleX)
            ) {
                return
            }
            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
        collect: (monitor) => ({
            handlerId: monitor.getHandlerId(),
        })
    });

    // карточка как источник перетаскивания
    const [{isDragging}, dragSourceRef] = useDrag({
        type: ItemType.HorizontalListCard,
        item: ({id, index}),
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    useEffect(() => {
        //console.log(isDragging)
        setDragging(isDragging)
    }, [isDragging])

    dragSourceRef(dropTargetRef(ref));

    return (
        <div ref={ref}
             className={clsx({
                 [style.card]: true,
                 [style.card_isDragging]: isDragging,
             })}
        >
            <img src={src} alt=""/>
        </div>
    )
}
