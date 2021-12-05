import {makeAutoObservable} from "mobx";

class PostsPageStore {

    constructor() {
        makeAutoObservable(this);
    }

    posts = [];
    isLoading = false;

    async fetchPosts() {
        try {
            this.isLoading = true;
            const idsResponse = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&orderBy=%22$key%22&limitToFirst=100');
            const ids = await idsResponse.json();
            const posts = [];
            for (let i = 0; i < ids.length; i++) {
                const dataResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${ids[i]}.json?print=pretty`);
                const data = await dataResponse.json();
                posts.push(data);
            }
            this.posts = posts;
        } catch (e) {
            console.log(e);
        }
        finally {
            this.isLoading = false;
        }
    }
}

export default new PostsPageStore();