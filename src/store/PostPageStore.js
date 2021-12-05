import {makeAutoObservable} from "mobx";

class PostPageStore {

    constructor() {
        makeAutoObservable(this);
    }

    post = {};

    loadPost(post) {
        this.post = post;
    }

}

export default new PostPageStore();