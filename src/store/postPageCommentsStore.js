import {makeAutoObservable} from "mobx";

class postPageCommentsStore {

    comments = [];
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setDisabled(id) {
        for(let i = 0; i < this.comments.length; i++) {
            if(this.comments[i].id === id) {
                this.comments[i].disabled = false;
            }
        }
    }

    async fetchComments(kids) {
        try {
            this.isLoading = true;
            this.comments = [];
            let comments = [];
            for (let i = 0; i < kids.length; i++) {
                const commentsResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${kids[i]}.json?print=pretty`);
                const commentsData = await commentsResponse.json();
                if(!("deleted" in commentsData)) {
                    let kidsCopy = [];
                    if (commentsData.kids && "kids" in commentsData) {
                        for (let i = 0; i < commentsData.kids.length; i++) {
                            const kidsResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${commentsData.kids[i]}.json?print=pretty`)
                            const kidsData = await kidsResponse.json();
                            kidsCopy = [...kidsCopy, kidsData];
                        }
                    }
                    comments = [...comments, {...commentsData, kidsCopy, disabled: true}]
                }
            }
            this.comments = comments;
        } catch (e) {
            console.log(e);
        } finally {
            this.isLoading = false;
        }
    }
}

export default new postPageCommentsStore();