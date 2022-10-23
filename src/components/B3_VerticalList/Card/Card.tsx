import type {Identifier, XYCoord} from 'dnd-core';
import React, {FC, useRef} from "react";
import style from "./Card.module.scss";
import {useDrag, useDrop} from "react-dnd";
import {ItemType} from "../../../types/dnd.types";
import clsx from "clsx";

interface IDragItem {
    index: number
    id: string
    type: string
}

interface ICard {
    id: any
    text: string
    index: number
    moveCard: (dragIndex: number, hoverIndex: number) => void
}

export const Card: FC<ICard> = ({id, text, index, moveCard}) => {
    const ref = useRef<HTMLDivElement>(null);

    // карточка как цель перетаскивание
    const [{handlerId}, dropTargetRef] = useDrop<IDragItem,
        void,
        { handlerId: Identifier | null }>({
        accept: ItemType.VerticalListCard,
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
            // координата Y середины карточки-цели
            const hoverMiddleY = 0.5 * (hoverBoundingRect.bottom + hoverBoundingRect.top);
            // Координаты указателя мыши = положение источника перетаскивания
            const clientOffsetY = (monitor.getClientOffset() as XYCoord).y;

            // если карточку не перетащила за накрытую ею карточку
            if (
                (dragIndex < hoverIndex && clientOffsetY < hoverMiddleY) ||
                (dragIndex > hoverIndex && clientOffsetY > hoverMiddleY)
            ) {
                return
            }
            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
        collect: (monitor) => ({
            handlerId: monitor.getHandlerId(),
        })
    })

    // карточка как источник перетаскивания
    const [{isDragging}, dragSourceRef] = useDrag({
        type: ItemType.VerticalListCard,
        item: ({id, index}),
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    dragSourceRef(dropTargetRef(ref));

    return (
        <div ref={ref}
             className={clsx({
                 [style.card]: true,
                 [style.card_isDragging]: isDragging,
             })}
        >
            <div className={style.inner}>
                {text}
            </div>

        </div>
    )
}
