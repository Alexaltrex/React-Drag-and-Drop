import React, {useEffect, useState} from "react";
import {cardsInitial} from "./cards";
import {checkFinish, randomArray, replaceItemsInArray} from "../../helpers/helpers";
import {Card} from "./Card/Card";
import style from "./HorizontalList.module.scss"
import Button from "@mui/material/Button";
import clsx from "clsx";

export const HorizontalList = () => {
    const [cards, setCards] = useState(cardsInitial);
    const [dragging, setDragging] = useState(false);
    const [finish, setFinish] = useState(false)

    const onClickHandler = () => {
        setCards(randomArray(4).map(index => cards[index]))
        setFinish(false);
    }

    useEffect(() => {
        //console.log(randomArray(4));
        setCards(randomArray(4).map(index => cards[index]))
        setFinish(false);
    }, [])

    useEffect(() => {
        if (!dragging) {
            setFinish(checkFinish(cards))
        }
    }, [cards, dragging])


    return (
        <div className={style.horizontalList}>
            <h1>Horizontal List</h1>

            <Button onClick={onClickHandler}
                    variant="contained"
                    className={style.btn}
            >
                Randomize
            </Button>


            <div className={clsx({
                [style.cards]: true,
                [style.cards_finish]: finish,
            })}>
                {
                    cards.map(({id, src}, index) => (
                        <Card key={id}
                              index={index}
                              id={id}
                              src={src}
                              moveCard={(dragIndex, hoverIndex) => {
                                  setCards(replaceItemsInArray(dragIndex, hoverIndex, cards))
                              }}
                              setDragging={(dragging: boolean) => setDragging(dragging)}
                        />
                    ))
                }
            </div>

        </div>
    )

}
