import { ThumbsUp, Trash } from 'phosphor-react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export const Comment = ({
  onDelete,
  content = [],
  publishedAt = new Date()
}) => {
  const publishedFormattedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
  });

  const getCommentContent = () => {
    if (content.type === 'paragraph') {
      return (
        <p>{content.message}</p>
      )
    }

    if (content.type === 'link') {
      return (
        <a href="#">{content.message}</a>
      )
    }

    return <p>{content.message}</p>
  }

  return (
    <div className={styles.comment}>
      <Avatar
        avatarUrl='https://github.com/thlindustries.png'
        noBorder
        customStyles={{ width: '3rem', height: '3rem' }}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.userInfo}>
              <strong>Thiago Kraetzer</strong>
              <time
                title={publishedFormattedDate}
                dateTime={publishedAt.toISOString()}
              >
                Cerca de {publishedDateRelativeToNow}
              </time>
            </div>

            <button type='button' title='Delete comment'>
              <Trash size={24} onClick={onDelete && onDelete} />
            </button>

          </header>
          {getCommentContent()}
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