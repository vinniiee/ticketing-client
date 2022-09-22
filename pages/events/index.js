import React from 'react';
import styles from "./scss/index.module.scss";
import Image from "next/future/image";
import logo from "../../public/img/black-logo.png";
import SearchIcon from "../../public/icons/SVG/search.svg";
import BookmarkIcon from "../../public/icons/SVG/bookmark.svg";
import userIcon from "../../public/user/default-user-image.jpg";



function AllEvents() {
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image  src={logo} className={styles.headerLogo}  alt="brandLogo" ></Image>
        <form className={styles.searchBar} >
          <input className={styles.searchBarInput}  placeholder="Search Events"/>
          <button className={styles.searchBarButton}>
          {/* <svg src={searchIcon} className={styles.searchBarIcon} >
            <use xlink:href='icons/sprite.svg#search'></use>
          </svg> */}
          <SearchIcon className={styles.searchBarIcon}  />
          </button>
        </form>
        <div className={styles.userNav}>
          <button className={styles.userNavBookmarkButton}>
            <BookmarkIcon className={styles.userNavBookmarkIcon} ></BookmarkIcon>
            <span className={styles.userNavBookmarkIconNotification}>99+</span>
          </button>
          <button className={styles.userNavProfileButton}>
            <Image src={userIcon} className={styles.userNavProfileIcon} alt="user-icon"></Image>
            <span className={styles.userNavUsername}>FIRST_NAME</span>
          </button>

        </div>

      </header>
      <div className={styles.content}>
        <nav className={styles.sideBar}>Side Bar</nav>
        <main className={styles.eventDescription}>Event Description</main>
      </div>


    </div>
  )
}

export default AllEvents;