import { Header } from "./components/Header"
import { Post } from "./components/Post";
import { SideBar } from "./components/SideBar";
import styles from "./styles/App.module.css";


export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/DouglasO-R.png",
      name: "Douglas Oliveira",
      role: "Unemployed",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: '👉 jane.design / doctorcare',
      },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/DouglasO-R.png",
      name: "Douglas Oliveira",
      role: "Unemployed",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: '👉 jane.design / doctorcare',
      },
    ],
    publishedAt: new Date('2022-08-3 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/DouglasO-R.png",
      name: "Douglas Oliveira",
      role: "Unemployed",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: '👉 jane.design / doctorcare',
      },
    ],
    publishedAt: new Date('2022-05-13 20:00:00'),
  }
];


function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />

        <main>

          {posts.map(post => (
            <Post
              id={post.id}
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}

        </main>

      </div>

    </div>
  )
}

export default App
