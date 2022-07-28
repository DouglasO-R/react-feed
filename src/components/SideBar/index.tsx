import styles from "./SideBar.module.css";

export function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1614070660963-80cc4df4bedd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt=""
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/DouglasO-R.png" alt="" />
                <strong>Douglas Oliveira</strong>
                <span>Full stack Dev</span>
            </div>

            <footer>
                <a href="#">
                    editar seu perfil
                </a>
            </footer>
        </aside>
    )
}