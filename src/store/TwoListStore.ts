import {action, makeObservable, observable} from "mobx";
import {IListItem} from "../components/B5_TwoLists/TwoLists";

export const leftListInitial: IListItem[] = [
    {
        id: 0,
        label: "Left list: item A"
    },
    {
        id: 1,
        label: "Left list: item B"
    },
    {
        id: 2,
        label: "Left list: item C"
    },
];

export const rightListInitial: IListItem[] = [
    {
        id: 3,
        label: "Right list: item D"
    },
    {
        id: 4,
        label: "Right list: item E"
    },
    {
        id: 5,
        label: "Right list: item F"
    },
];

export class TwoListStore {
    leftList: IListItem[] = leftListInitial
    rightList: IListItem[] = rightListInitial

    constructor() {
        makeObservable(this,
            {
                leftList: observable,
                rightList: observable,
                addToLeftList: action.bound,
                addToRightList: action.bound,
                removeFromLeftList: action.bound,
                removeFromRightList: action.bound,
            }
        )
    }

    addToLeftList(item: IListItem) {
        this.leftList.push(item)
    }

    addToRightList(item: IListItem) {
        this.rightList.push(item)
    }

    removeFromLeftList(item: IListItem) {
        this.leftList = this.leftList.filter(el => el.id !== item.id)
    }

    removeFromRightList(item: IListItem) {
        this.rightList = this.rightList.filter(el => el.id !== item.id)
    }
}
