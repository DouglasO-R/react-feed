import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import styles from "./Comment.module.css";

type Props = {
    content: string,
    onDeleteComment: (comment:string) => void
};

export function Comment({ content, onDeleteComment }: Props) {
    const [likesCount, setLikesCount] = useState(0);

    const handleDeleteComment = () => {
        onDeleteComment(content)
    }
    const handleLikeComment = () => {
        setLikesCount((prevState) => prevState + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/DouglasO-R.png" hasBorder={false} />

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Douglas Oliveira</strong>
                            <time title="28 de julho as 13:59" dateTime="2022-07-28 13:59:00"> Publicado ha 1 hora</time>
                        </div>

                        <button
                            onClick={handleDeleteComment}
                            title="excluir">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Applaudir <span> {likesCount} </span>
                    </button>
                </footer>

            </div>

        </div>
    );
}