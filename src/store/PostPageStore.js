import {makeAutoObservable} from "mobx";

class PostPageStore {

    constructor() {
        makeAutoObservable(this);
    }

    post = {};

    loadPost(post) {
        this.post = post;
    }

    async fetchPost(id) {
        try {
            const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
            const data = await response.json();
            this.post = data;
        } catch (e) {
            console.log(e);
        }
    }
}

export default new PostPageStore();