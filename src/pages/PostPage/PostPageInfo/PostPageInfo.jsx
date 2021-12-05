import {observer} from "mobx-react-lite";
import styles from "../PostPage.module.css";
import PostPageStore from "../../../store/PostPageStore";
import UserBlue from "../../../assets/icons/UserBlue.png";
import CalendarBlue from "../../../assets/icons/CalendarBlue.png";
import Notifications from "../../../assets/icons/NotificationsWhite.png";

const PostPageInfo = observer(() => {

    let postDate = new Date(PostPageStore.post.time * 1000);

    return (
        <div className={styles.info_container}>
            <div className={styles.info_container__head}>
                <h1><u>{PostPageStore.post.title}</u></h1>
            </div>
            <div className={styles.info_container__desc}>
                <div className={styles.info_container__name}>
                    <img src={UserBlue} alt={"user icon"}/>
                    {PostPageStore.post.by}
                </div>
                <div className={styles.info_container__date}>
                    <img src={CalendarBlue} alt={"calendar icon"}/>
                    {postDate.toLocaleDateString()} {postDate.toLocaleTimeString()}
                </div>
                <button className={styles.info_container__button}>
                    <a href={PostPageStore.post.url} target="_blank" rel="sourse">
                        <img src={Notifications} alt={"planet icon"}/>
                        Sourse
                    </a>
                </button>
            </div>
        </div>
    )
})

export default PostPageInfo;