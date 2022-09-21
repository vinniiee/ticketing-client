import React from 'react';
import styles from "./scss/index.module.scss";

function AllEvents() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>header</header>
      <div className={styles.content}>
        <nav className={styles.sideBar}>Side Bar</nav>
        <main className={styles.eventDescription}>Event Description</main>
      </div>


    </div>
  )
}

export default AllEvents