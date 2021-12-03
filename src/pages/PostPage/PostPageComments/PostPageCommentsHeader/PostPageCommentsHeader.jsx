import {observer} from "mobx-react-lite";
import styles from "../../PostPage.module.css";
import postPageCommentsStore from "../../../../store/postPageCommentsStore";
import postPageStore from "../../../../store/postPageStore";

const PostPageCommentsHeader = observer(() => {

    return (
        <div className={styles.comment_container__head}>
            <div className={styles.comment_container__count}>
                {postPageCommentsStore.isLoading ? <h1>Loading comments...</h1> : <h1>{postPageCommentsStore.comments.length} comments</h1>}
            </div>
            <div className={styles.comment_container__button}>
                <button disabled={postPageCommentsStore.isLoading} onClick={() => {
                    postPageCommentsStore.fetchComments(postPageStore.post.kids);
                }}>Refresh</button>
            </div>
        </div>
    )
})

export default PostPageCommentsHeader;