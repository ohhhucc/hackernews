import {observer} from "mobx-react-lite";
import styles from "../PostsPage.module.css";
import postsPageStore from "../../../store/postsPageStore";
import loader from "../../../assets/loaders/Loader.svg";

const PostsPageHeader = observer(() => {
    return (
        <header className={styles.header_container}>
            <div className={styles.header_container__head}>
                <h1>Hacker News UI</h1>
            </div>
            <div className={styles.header_container__button}>
                <button onClick={() => postsPageStore.fetchPosts()} disabled={postsPageStore.isLoading}>{
                    postsPageStore.isLoading ? <img alt={"loader"} src={loader} className={styles.loader}/> : <p>Refresh</p>
                }</button>
            </div>
        </header>
    )
})

export default PostsPageHeader;