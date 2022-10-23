import React, {useState} from "react";
import {cardsInitial} from "./cards";
import {Card} from "./Card/Card";
import {replaceItemsInArray} from "../../helpers/helpers";
import style from "./VerticalList.module.scss"

export const VerticalList = () => {
    const [cards, setCards] = useState(cardsInitial);

    return (
       <div className={style.verticalList}>
           <h1>Vertical List</h1>
           <div className={style.cards}>
               {
                   cards.map(({id, text}, index) => (
                       <Card key={id}
                             index={index}
                             id={id}
                             text={text}
                             moveCard={(dragIndex, hoverIndex) => {
                                 setCards(replaceItemsInArray(dragIndex, hoverIndex, cards))
                             }}

                       />
                   ))
               }
           </div>

       </div>
    )
}
