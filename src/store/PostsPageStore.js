import {makeAutoObservable} from "mobx";

class PostsPageStore {

    constructor() {
        makeAutoObservable(this);
    }

    ids = [];
    posts = [];
    isLoading = false;

    async fetchPosts() {
        try {
            this.isLoading = true;
            const idsResponse = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&orderBy=%22$key%22&limitToFirst=100');
            const ids = await idsResponse.json();
            const posts = [];
            if(this.ids.length !== 0) {
                const difference = ids.filter(x => !this.ids.includes(x));
                if(difference.length !== 0) {
                    for (let i = 0; i < difference.length; i++) {
                        const differenceResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${difference[i]}.json?print=pretty`)
                        const differenceData = await differenceResponse.json();
                        this.posts.pop();
                        this.posts.unshift(differenceData);
                        this.ids.pop();
                        this.ids.unshift(difference[i]);
                    }
                }
            } else {
                for (let i = 0; i < ids.length; i++) {
                    const dataResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${ids[i]}.json?print=pretty`);
                    const data = await dataResponse.json();
                    posts.push(data);
                }
                this.ids = ids;
                this.posts = posts;
            }
        } catch (e) {
            console.log(e);
        }
        finally {
            this.isLoading = false;
        }
    }
}

export default new PostsPageStore();