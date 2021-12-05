import {observer} from "mobx-react-lite";
import styles from "../../PostPage.module.css";
import PostPageCommentsStore from "../../../../store/PostPageCommentsStore";
import PostPageStore from "../../../../store/PostPageStore";

const PostPageCommentsHeader = observer(() => {

    return (
        <div className={styles.comment_container__head}>
            <div className={styles.comment_container__count}>
                {PostPageCommentsStore.isLoading ? <h1>Loading comments...</h1> : <h1>{PostPageCommentsStore.comments.length} comments</h1>}
            </div>
            <div className={styles.comment_container__button}>
                <button disabled={PostPageCommentsStore.isLoading} onClick={() => {
                    PostPageCommentsStore.fetchComments(PostPageStore.post.kids);
                }}>Refresh</button>
            </div>
        </div>
    )
})

export default PostPageCommentsHeader;