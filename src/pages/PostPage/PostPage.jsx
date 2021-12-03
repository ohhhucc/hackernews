import styles from './PostPage.module.css';
import PostPageHeader from "./PostPageHeader/PostPageHeader";
import PostPageInfo from "./PostPageInfo/PostPageInfo";
import PostPageComments from "./PostPageComments/PostPageComments";

const PostPage = () => {

    return (
        <div className={styles.page}>
            <div className={styles.post}>

                <PostPageHeader/>

                <PostPageInfo/>

                <PostPageComments/>

            </div>
        </div>
    )
};

export default PostPage;