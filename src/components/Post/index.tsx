import styles from "./Post.module.css";

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <img className={styles.avatar} src="https://github.com/DouglasO-R.png" alt="" />

                    <div className={styles.authorInfo}>
                        <strong>Douglas Oliveira</strong>
                        <span>FullStack Dev</span>
                    </div>

                </div>

                <time title="28 de julho as 13:59" dateTime="2022-07-28 13:59:00"> Publicado ha 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>

                <p>
                    <a href="">
                        👉 jane.design/doctorcare
                    </a>
                </p>

                <p>
                    <a href=""> #novoprojeto</a>
                    <a href=""> #nlw</a>
                    <a href=""> #rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea
                    placeholder="Deixe um comentario"
                />

                <footer>
                    <button type="submit">Comentario</button>
                </footer>
            </form>

        </article>
    );
}