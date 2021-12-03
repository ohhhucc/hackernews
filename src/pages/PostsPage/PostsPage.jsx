import styles from './PostsPage.module.css';
import PostsPagePost from "./PostsPagePost/PostsPagePost";
import PostsPageHeader from "./PostsPageHeader/PostsPageHeader";

const PostsPage = () => {

    return (
        <div className={styles.page}>
            <div className={styles.posts}>
                <PostsPageHeader/>
                <PostsPagePost/>
            </div>
        </div>
    )
};

export default PostsPage;