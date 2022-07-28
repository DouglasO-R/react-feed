import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./Comment.module.css";

export function Comment() {
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

                        <button title="excluir">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Applaudir <span> 20 </span>
                    </button>
                </footer>

            </div>

        </div>
    );
}