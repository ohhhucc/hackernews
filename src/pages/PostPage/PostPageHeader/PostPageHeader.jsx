import styles from "../PostPage.module.css";
import {Link} from "react-router-dom";

const PostPageHeader = () => {
    return (
        <header className={styles.header_container}>
            <div className={styles.header_container__head}>
                <h1>Hacker News UI</h1>
            </div>
            <div className={styles.header_container__button}>
                <Link to={"/"}><button>Back</button></Link>
            </div>
        </header>
    )
}

export default PostPageHeader;