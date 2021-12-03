import {makeAutoObservable} from "mobx";

class postPageStore {

    constructor() {
        makeAutoObservable(this);
    }

    post = {};

    loadPost(post) {
        this.post = post;
    }

}

export default new postPageStore();