import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

import headerBg from '../assets/aside-header-bg.jpeg';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={headerBg}
        alt="aside header background"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/53842905?v=4"
          alt="User profile image"
        />
        <strong>Thiago Lorente</strong>
        <span>Debugger pro</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}