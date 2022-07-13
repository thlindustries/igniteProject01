import styles from './Avatar.module.css';

export const Avatar = ({
  avatarUrl = '',
  noBorder = false,
  customStyles,
  ...props
}) => (
  <img
    className={`${styles.avatar} ${noBorder ? styles.noBorder : ''}`}
    src={avatarUrl}
    style={{
      ...customStyles,
    }}
    {...props}
  />
)