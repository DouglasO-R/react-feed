import { Header } from "./components/Header"
import { SideBar } from "./components/SideBar";
import styles from "./styles/App.module.css";

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          Posts
        </main>
      </div>
    </div>
  )
}

export default App
