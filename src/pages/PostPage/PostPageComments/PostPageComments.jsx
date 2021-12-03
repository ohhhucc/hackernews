import styles from "../PostPage.module.css";
import PostPageCommentsHeader from "./PostPageCommentsHeader/PostPageCommentsHeader";
import {observer} from "mobx-react-lite";
import postPageCommentsStore from "../../../store/postPageCommentsStore";
import UserBlack from "../../../assets/icons/UserBlack.png";
import CalendarBlack from "../../../assets/icons/CalendarBlack.png";

const PostPageComments = observer(() => {
    return (

        <div className={styles.comment_container}>

            <PostPageCommentsHeader/>

            {postPageCommentsStore.comments.map(element => {

                let commentDate = new Date(element.time * 1000);

                return (
                    <div className={styles.comment_container__item} key={element.id}>
                        <div className={styles.comment_container__info}>
                            <div className={styles.comment_container__name}>
                                <img src={UserBlack} alt={"user icon"}/>
                                {element.by}
                            </div>
                            <div className={styles.comment_container__date}>
                                <img src={CalendarBlack} alt={"calendar icon"}/>
                                {commentDate.toLocaleDateString()} {commentDate.toLocaleTimeString()}
                            </div>
                        </div>
                        <div className={styles.comment_container__body} onClick={() => {
                            postPageCommentsStore.setDisabled(element.id);
                        }}>
                            <p dangerouslySetInnerHTML={{__html: element.text}}></p>
                        </div>

                        <div className={styles.comment_container__kids}>

                            {!element.disabled && element.kidsCopy.map(element => {

                                let kidDate = new Date(element.time * 1000);

                                return (
                                    <div>
                                        <div className={styles.comment_container__info}>
                                            <div className={styles.comment_container__name}>
                                                <img src={UserBlack} alt={"user icon"}/>
                                                {element.by}
                                            </div>
                                            <div className={styles.comment_container__date}>
                                                <img src={CalendarBlack} alt={"calendar icon"}/>
                                                {commentDate.toLocaleDateString()} {commentDate.toLocaleTimeString()}
                                            </div>
                                        </div>
                                        <div className={styles.comment_container_kid}>
                                            <p dangerouslySetInnerHTML={{__html: element.text}}></p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
});

export default PostPageComments;