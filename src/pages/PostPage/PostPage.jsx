import styles from './PostPage.module.css';
import PostPageHeader from "./PostPageHeader/PostPageHeader";
import PostPageInfo from "./PostPageInfo/PostPageInfo";
import PostPageComments from "./PostPageComments/PostPageComments";
import {useLocation} from "react-router-dom";

const PostPage = () => {

    const location = useLocation();

    const id = location.pathname.replace(/^\D+/g, '');

    return (
        <div className={styles.page}>
            <div className={styles.post}>

                <PostPageHeader/>

                <PostPageInfo/>

                <PostPageComments id={id}/>

            </div>
        </div>
    )
};

export default PostPage;