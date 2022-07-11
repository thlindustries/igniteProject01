import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://github.com/thlindustries.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.userInfo}>
              <strong>Thiago Kraetzer</strong>
              <time
                title='11 de julho as 08:30'
                dateTime='2022-07-11 08:30:00'
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button type='button' title='Delete comment'>
              <Trash size={24} />
            </button>

          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button type='button' title='Give applauses'>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}