import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import PostsPageStore from '../../../store/PostsPageStore';
import PostPageStore from '../../../store/PostPageStore';
import PostPageCommentsStore from '../../../store/PostPageCommentsStore';
import {useInterval} from "../../../hooks/useInterval";
import styles from "../PostsPage.module.css";
import User from "../../../assets/icons/UserWhite.png";
import {Link} from "react-router-dom";

const PostsPagePost = observer(() => {

    useEffect(() => {
        PostsPageStore.fetchPosts();
    }, [])

    useInterval(() => {
        PostsPageStore.fetchPosts();
    }, 60000)

    return (

        <div className={styles.content_container}>

            {PostsPageStore.posts.filter(element => element !== null).map(element => {

                let date = new Date(element.time * 1000);

                return (
                    <div className={styles.content_post} key={element.id}>
                        <div className={styles.content_post__head}>
                            <div className={styles.content_post__header}>
                                <div className={styles.content_post__icon}>
                                    <img src={User} alt={"user icon"}/>
                                </div>
                                <div className={styles.content_post__name}>
                                    <p>{element.by}</p>
                                </div>
                            </div>
                            <div className={styles.content_post__body}>
                                <Link to={`/post/${element.id}`} onClick={() => {
                                    PostPageStore.loadPost(element);
                                    PostPageCommentsStore.fetchComments(element.kids);
                                }}><p>{element.title}</p></Link>
                            </div>
                        </div>
                        <div className={styles.content_post__info}>
                            <div className={styles.content_post__rate}>
                                <p>{element.score} score</p>
                            </div>
                            <div className={styles.content_post__date}>
                                <p>{date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
})

export default PostsPagePost;