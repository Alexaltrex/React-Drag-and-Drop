import React from "react";
import style from "./SingleTarget.module.scss"
import {useDrag} from "react-dnd";
import {ItemType} from "../../types/dnd.types";
import clsx from "clsx";
import {colors} from "./const";
import {Brush} from "./Brush/Brush";
import {TargetOfBrush} from "./TargetOfBrush/TargetOfBrush";

interface ICollectedProps {
    isDragging: boolean
}

export const SingleTarget = () => {
    // useDrag обеспечивает подключения вашего компонента к системе DnD в качестве DRAG SOURCE
    //const [
    //    collectedProps, // объект, содержащий props из collect function. Если collect function не указана, возвращается пустой объект
    //    dragSourceRef, // refs, который может быть указан для drag source
    //    dragPreviewRef // refs, который может быть указан для drag preview elements
    //] = useDrag<any, any, ICollectedProps>(() => ({ //  Объект спецификации или функция, создающая объект спецификации
        //type: ItemType.Box, // (required, string or a symbol) только DRAG TARGET с этим же type будут реагировать на этот item
        //item: {id: "1"}, // (required, object or function) или js object, описывающий перетаскиваемые данные
                        // или функция, которая запускается в начале операции перетаскивания и возвращает js object
        // previewOptions: { // (optional), объект, содержащий опции drag preview
        //     anchorX: 0.5,
        //     anchorY: 0.5,
        //     offsetX: 100,
        //     offsetY: 100,
        // },
        // options: { // (optional) Drag Source Options
        //     dropEffect: "move" // 'move' by default or "copy"
        // },
        // end: (item, monitor) => { //(optional) обработчик конца перетаскивания
        //     console.log(item)
        //     console.log(monitor)
        // },
        //canDrag: true, // (опционально, по умолчанию пропущено) позволяет задать условие возможности перетаскивания
                       // если перетаскивание возможно всегда, не задается
        // isDragging: (monitor) => {
        //      (опционально), по умолчанию только источник перетаскивания, инициировавший операцию перетаскивания, считается перетаскиваемым
        //      Вы можете переопределить это поведение, определив собственный isDragging метод
        // },
        //collect: (monitor) => ({ // (optional) collecting function,
        //                                                // задает collectedProps (1-й элемент кортежа, возвращаемого из useDrag)
        //      isDragging: monitor.isDragging()
        //})
    //}))

    return (
        <div className={style.singleTarget}>
            <h1>Single Target</h1>

            <div className={style.content}>
                <div className={style.brushes}>
                    {
                        colors.map(color => (
                            <Brush key={color} color={color} className={style.brush}/>
                        ))
                    }
                </div>
                <TargetOfBrush/>
            </div>

        </div>
    )
}
