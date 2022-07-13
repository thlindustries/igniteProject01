import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      name: 'Thiago Lorente Kraetzer',
      avatarUrl: 'https://github.com/thlindustries.png',
      role: 'CTO @ Thlindustries'
    },
    publishedAt: new Date('2022-07-11 08:30:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉jane.design/doctorcare', className: '${styles.hashtag} ${styles.hashtagVariation}', redirectTo: '#' },
      { type: 'link', content: '#novoprojeto', className: '${styles.hashtag}', redirectTo: '#' },
      { type: 'link', content: '#nlw', className: '${styles.hashtag}', redirectTo: '#' },
      { type: 'link', content: '#rocketseat', className: '${styles.hashtag}', redirectTo: '#' },
    ]
  },
  {
    id: 2,
    author: {
      name: 'Maykão',
      avatarUrl: 'https://github.com/maykbrito.png',
      role: 'Educator @ Rocketseat'
    },
    publishedAt: new Date('2022-07-12 12:30:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉jane.design/doctorcare', className: 'styles.hashtag styles.hashtagVariation', redirectTo: '#' },
      { type: 'link', content: '#novoprojeto', className: 'styles.hashtag', redirectTo: '#' },
      { type: 'link', content: '#nlw', className: 'styles.hashtag', redirectTo: '#' },
      { type: 'link', content: '#rocketseat', className: 'styles.hashtag', redirectTo: '#' },
    ]
  },
]

export const App = () => (
  <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => (
          <Post
            key={post.id}
            author={post.author}
            publishedAt={post.publishedAt}
            content={post.content}
          />
        ))}
      </main>
    </div>
  </>
)

