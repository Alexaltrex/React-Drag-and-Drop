import React from "react";
import style from "./MultipleTarget.module.scss"
import {ItemType} from "../../types/dnd.types";
import {SourceItem} from "./SourceItem/SourceItem";
import {TargetItem} from "./TargetItem/TargetItem";

export const items = [ItemType.CircleItem, ItemType.SquareItem, ItemType.RhombusItem];

export const MultipleTarget = () => {


    return (
        <div className={style.multipleTarget}>
            <h1>Multiple Targets</h1>
            <div className={style.content}>
                <div className={style.sourceItems}>
                    {
                        items.map(item => (
                            <SourceItem key={item}
                                        item={item}
                                        className={style.sourceItem}
                            />
                        ))
                    }
                </div>

                <div className={style.targetItems}>
                    {
                        items.map(item => (
                            <TargetItem key={item} item={item}/>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}
