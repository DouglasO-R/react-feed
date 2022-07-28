import { Header } from "./components/Header"
import { Post } from "./components/Post";
import { SideBar } from "./components/SideBar";
import styles from "./styles/App.module.css";

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />

        <main>

          <Post />

          <Post />

        </main>

      </div>
      
    </div>
  )
}

export default App
