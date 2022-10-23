import {TwoListStore} from "./TwoListStore";

export class RootStore {
    twoListStore: TwoListStore;

    constructor() {
        this.twoListStore = new TwoListStore();

    }
}
export const store = new RootStore()
