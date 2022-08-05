import React, { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { posts } from "../../App";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./Post.module.css";

type Props = typeof posts[0];


export function Post({ author, content, publishedAt }: Props) {
    const [comments, setComments] = useState(["post muito bacana"]);
    const [newCommentText, setNewCommentText] = useState('');


    const datePublishedFormat = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    const isNewCommentEmpty = newCommentText.length === 0;

    const handleCreateNewComment = (e: React.FormEvent) => {
        e.preventDefault();

        setComments([...comments, newCommentText]);
        
        setNewCommentText(() => '');
    }

    const handleNewCommentTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.setCustomValidity("");

        setNewCommentText(() => e.target.value);
    }

    const handleNewCommentInvalid = (e: React.InvalidEvent<HTMLTextAreaElement>) => {
        e.target.setCustomValidity("Esse Campo é Obrigatorio");
    }

    const deleteComment = (comment: string) => {
        const commentsWithoutDeletedOne = comments.filter(item => item !== comment);

        setComments(() => [...commentsWithoutDeletedOne]);
    }



    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>

                </div>

                <time title={datePublishedFormat} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}

                <p>
                    <a href=""> #novoprojeto</a>
                    <a href=""> #nlw</a>
                    <a href=""> #rocketseat</a>
                </p>
            </div>

            <form
                onSubmit={handleCreateNewComment}
                className={styles.commentForm}
            >
                <strong>Deixe seu Feedback</strong>
                <textarea
                    name="comment"
                    placeholder="Deixe um comentario"
                    onChange={handleNewCommentTextChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Comentario</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => (
                    <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                ))}
            </div>

        </article>
    );
}