import {ICardItem} from "../components/B4_HorizontalList/cards";

export function replaceItemsInArray<T>(index1: number, index2: number, arr: T[]): T[] {
    const ret = [...arr]
    const retRevert = ret.map((el, index) => {
        if (index === index1) {
            return arr[index2]
        }
        if (index === index2) {
            return arr[index1]
        }
        return el
    })
    return retRevert
}

const getRandomIntInclusive = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

export const randomArray = (length: number): number[] => {
    const arr = [] as number[]

    for (let i = 0; i < length; i++) {
        let arrNotIncludeRandomIndex = false;
        while (!arrNotIncludeRandomIndex) {
            const randomIndex = getRandomIntInclusive(0, length - 1);
            if (!arr.includes(randomIndex)) {
                arrNotIncludeRandomIndex = true;
                arr[i] = randomIndex
            }
        }
    }
    return arr
}

export const checkFinish = (cards: ICardItem[]) => {
    let ret = true;
    for (let i = 0; i < cards.length; i++) {
        if (i !==  cards[i].id) {
            ret = false
        }
    }
    return ret
}
