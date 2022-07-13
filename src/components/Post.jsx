import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

/**
 * @props
 * author: { name: string, avatarUrl: string, role: string }
 * publishedAt: Date
 * content: string
 * comments: [{ author: { name: string, avatarUrl: string, role: string }, content: string }]
 */

export const Post = ({
  author,
  publishedAt,
  content,
}) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      content: {
        type: 'paragraph',
        message: 'Muito bom Devon, parabéns!! 👏👏',
      },
      publishedAt: new Date('2022-07-11 08:30:00'),
    },
    {
      id: 2,
      content: {
        type: 'paragraph',
        message: 'Top d+++, parabéns!! 👏👏',
      },
      publishedAt: new Date('2022-07-11 09:30:00'),
    },
    {
      id: 3,
      content: {
        type: 'paragraph',
        message: 'Show de bola',
      },
      publishedAt: new Date('2022-07-11 10:30:00'),
    },

  ]);

  const publishedFormattedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const handleCreateNewComment = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const updatedComments = [...comments];

    const newComment = {
      id: updatedComments.length + 1,
      content: {
        type: 'paragraph',
        message: formData.get('comment'),
      },
      publishedAt: new Date(),
    };

    updatedComments.push(newComment);
    event.target.comment.value = '';

    setComments(updatedComments);
  }

  const handleDelete = (commentId) => {
    const updatedComments = [...comments];
    updatedComments.splice(commentId, 1);

    setComments(updatedComments);
  }

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar
            avatarUrl={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedFormattedDate}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        <p>
          {content.map(item => {
            if (item.type === 'paragraph') {
              return <p>{item.content}</p>
            }
            if (item.type === 'link') {
              return (
                <p>
                  <a
                    className={`
                    ${item.className.includes('hashtag')
                        ? styles.hashtag
                        : ''
                      } 
                    ${item.className.includes('hashtagVariation')
                        ? styles.hashtagVariation
                        : styles.hashtag}`
                    }
                    href={item.redirectTo}>{item.content}
                  </a>
                </p>
              )
            }
          })}
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm} name="commentForm">
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
          name='comment'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment
            onDelete={() => handleDelete(index)}
            content={comment.content}
            publishedAt={comment.publishedAt}
          />
        ))}
      </div>
    </article>
  )
}