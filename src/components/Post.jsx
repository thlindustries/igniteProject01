import { Comment } from './Comment';

import styles from './Post.module.css';

export const Post = () => {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/thlindustries.png" />
          <div className={styles.authorInfo}>
            <strong>Thiago Kraetzer</strong>
            <span>Debugger pro</span>
          </div>
        </div>

        <time
          title='11 de julho as 08:30'
          dateTime='2022-07-11 08:30:00'
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p>👉<a className={`${styles.hashtag} ${styles.hashtagVariation}`} href="#">jane.design/doctorcare</a></p>
          <p>
            <a className={styles.hashtag} href="#">#novoprojeto</a>
            <a className={styles.hashtag} href="#">#nlw</a>
            <a className={styles.hashtag} href="#">#rocketseat</a></p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}