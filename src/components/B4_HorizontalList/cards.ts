import src0 from "../../assets/jpg/0.jpg";
import src1 from "../../assets/jpg/1.jpg";
import src2 from "../../assets/jpg/2.jpg";
import src3 from "../../assets/jpg/3.jpg";

export interface ICardItem {
    id: number,
    src: string
}

export const cardsInitial = [
    {
        id: 0,
        src: src0
    },
    {
        id: 1,
        src: src1
    },
    {
        id: 2,
        src: src2
    },
    {
        id: 3,
        src: src3
    },
]
