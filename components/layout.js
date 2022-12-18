import React, { Fragment, useEffect, useState } from "react";
import styles from "./scss/layout.module.scss";
import Image from "next/future/image";
import logo from "../public/img/black-logo.png";
import SearchIcon from "../public/icons/SVG/search.svg";
import BookmarkIcon from "../public/icons/SVG/bookmark.svg";
import UserIcon from "../public/user/default-user-image.jpg";
import HomeIcon from "../public/icons/SVG/home.svg";
import GenreIcon from "../public/icons/SVG/genre.svg";
import PublishIcon from "../public/icons/SVG/publish.svg";
import RegistrationIcon from "../public/icons/SVG/registration.svg";
import SignoutIcon from "../public/icons/SVG/signout.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { serverRequest } from "../utils";
import { authActions, navActions } from "../store";

function Layout(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);
  // const [ homeButton,setHomeButton] =useState(`${styles.button}`);

  // const [ genreButton,setGenreButton] =useState(`${styles.button}`);
  // const [ publishButton,setPublishButton] =useState(`${styles.button}`);
  // const [ authButton,setAuthButton] =useState(`${styles.button}`);
  const homeButtonClasses = useSelector(state=> state.nav.homeButtonClasses);
  const genreButtonClasses = useSelector(state=> state.nav.genreButtonClasses);
  const publishButtonClasses = useSelector(state=> state.nav.publishButtonClasses);
  const authButtonClasses = useSelector(state=> state.nav.authButtonClasses);
  let signoutClasses = styles.button;

  // console.log("publishButtonClasses: ",publishButtonClasses);
  // const [user,setUser] = useState();

  useEffect(  ()=>{

    const getUser  = async ()=>{

      const {user} = await serverRequest("auth/currentUser","GET");
        console.log("useEffect: ",user);
      if(user){
        dispatch(authActions.signin({name:user.name,email:user.email}));
      }
    }
    getUser();
    


      if(router.pathname.startsWith("/events/genre")) dispatch(navActions.toggleGenreButton({active:true}));
      else if(router.pathname.startsWith("/events/publish")) {dispatch(navActions.togglePublishButton({active:true}))}
      // else if(router.pathname.startsWith("/auth?publish=true"))  { dispatch(navActions.toggleAuthButton({active:true}));}
      else if(router.pathname.startsWith("/auth")) dispatch(navActions.toggleAuthButton({active:true}));

      else{
        dispatch(navActions.toggleHomeButton({active:true}));
      }
  },[router,dispatch]);
  
  
  const isAuthenticated = user;
  // console.log("user: ", user);
  const name = user? user.name:"Guest";
  // console.log("homeClasses: ",homeClasses);
  const signoutHandler = async ()=>{
    const signoutFlow = async ()=>{
      serverRequest("auth/signout","GET");
    dispatch(authActions.signout());
    dispatch(navActions.toggleAuthButton({active:false}));
    dispatch(navActions.togglePublishButton({active:false}));
    
    };
    await signoutFlow();
    router.replace("/events");


  }


  const activeHandler = (event)=>{
    // if(router.pathname.startsWith("/events/genre")){
    // console.log("path: ",router.pathname);
    // }
    console.log("from active handler...",router.pathname)
    if(router.pathname.startsWith("/auth"))    dispatch(navActions.toggleAuthButton({active:false}));
      else if(router.pathname.startsWith("/events/genre"))  dispatch(navActions.toggleGenreButton({active:false}));
      else if(router.pathname.startsWith("/events/publish"))  dispatch(navActions.togglePublishButton({active:false}));
      else{
        dispatch(navActions.toggleHomeButton({active:false}));
      }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
    
        <Link href="/">
          <Image onClick={activeHandler} src={logo} className={styles.headerLogo} alt="brandLogo" />
        </Link>
    
        <form className={styles.searchBar}>
          <input
            className={styles.searchBarInput}
            placeholder="Search Events"
          />
          <button className={styles.searchBarButton}>
            <SearchIcon className={styles.searchBarIcon} />
          </button>
        </form>
        <div className={styles.userNav}>
         {user && 
          <button className={styles.userNavBookmarkButton}>
          <BookmarkIcon className={styles.userNavBookmarkIcon}></BookmarkIcon>
          <span className={styles.userNavBookmarkIconNotification}>5</span>
        </button>}
          <button className={styles.userNavProfileButton}>
            <Image
              src={UserIcon}
              className={styles.userNavProfileIcon}
              alt="user-icon"
            />
            <span className={styles.userNavUsername}>{name}</span>
          </button>
        </div>
      </header>
      
      {/* <div className={styles.content}> */}
      <nav className={styles.sideBar}>
        <ul className={styles.navItemsList}>
          <li className={styles.navItemsListItem}>
          <button onClick={activeHandler} className={homeButtonClasses}>

            <Link href="/events">
              <div className={styles.navItemsListItemLink}>
                <HomeIcon className={styles.navItemsIcon} alt="home-icon" />
                <span className={styles.navItemsListSpan}>Home</span>
              </div>
            </Link>
            </button>
          </li>
          <li className={styles.navItemsListItem}>
          <button onClick={activeHandler} className={genreButtonClasses}>

            <Link href="/events/genre">
              <div className={styles.navItemsListItemLink}>
                <GenreIcon className={styles.navItemsIcon} alt="genre-icon" />
                <span className={styles.navItemsListSpan}>Genre</span>
              </div>
            </Link>
          </button>
          </li>
         {isAuthenticated &&
          <li className={styles.navItemsListItem}>
          <button onClick={activeHandler} className={publishButtonClasses}>

            <Link href="/events/publish">
              <div className={styles.navItemsListItemLink}>
                <PublishIcon
                  className={styles.navItemsIcon}
                  alt="publish-icon"
                />
                <span className={styles.navItemsListSpan}>Publish Event</span>
              </div>
            </Link>
          </button>
          </li>}
          {!isAuthenticated && (
            <li className={styles.navItemsListItem}>
                            <button onClick={activeHandler} className={authButtonClasses}>

              <Link href="/auth">
                <div className={styles.navItemsListItemLink}>
                  <RegistrationIcon
                    className={styles.navItemsIcon}
                    alt="registration-icon"
                  />
                  <span className={styles.navItemsListSpan}>
                    Authentication
                  </span>
                </div>
              </Link>
            </button>
              {/* <ul className={styles.registrationOptions}>
                <li className={styles.registrationOptionsItem}>
                  <Link className={styles.registrationOptionsItem} href="/events"><div><SigninIcon className={styles.navItemsIcon}/> Signin</Fragment></Link>
                </li>
                <li className={styles.registrationOptionsItem}>
                  <Link className={styles.registrationOptionsItem} href="/"><Fragment><SignupIcon className={styles.navItemsIcon}/> Signup</Fragment></Link>
                </li>
              </ul> */}
            </li>
          )}
          {isAuthenticated && (
            <li className={styles.navItemsListItem}>
              <button onClick={signoutHandler} className={signoutClasses}>

              <Link href="/events" >
                  <div className={styles.navItemsListItemLink}>
                  <SignoutIcon
                    className={styles.navItemsIcon}
                    alt="signout-icon"
                  />
                  <span className={styles.navItemsListSpan}>Signout</span>
                </div>
                  
              </Link>
              </button>
            </li>
          )}
        </ul>
        <span className={styles.sideBarFootnote}>&copy; vinniiee2022</span>
      </nav>
      <main className={styles.mainContent}> {props.children} </main>
    </div>
  );
}

export default Layout;

export async function getServerSideProps(context){
  // const dispatch = useDispatch();
  const user = await serverRequest("auth/currentUser","GET");
  console.log("111111111111111: ",user);
  return {
    props:{
      user
    }
  }
}