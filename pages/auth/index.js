import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import styles from "./auth.module.scss";
export default function Auth() {
  const emailRef = useRef("");
  const router = useRouter();
  const [error,setError] = useState();
  useEffect(()=>{
    if(router.query.email=="invalid"){
      setError("Invalid Email Address. Try Again!");
    }
  },[]);
  const submitHandler = async (event)=>{
    event.preventDefault();
    const email = emailRef.current.value;
    router.replace(`/auth/${email}`);
  }
  return (
    <div className={styles.auth}>
      <h1 className={styles.authHeading}>AUTHENTICATION <span className={styles.authHeadingSpan}>{`>>>`}</span></h1>
      <form className={styles.authForm} onSubmit={submitHandler}>      
        <div className={styles.authFormGroup}>
          <input id="title" className={`${styles.authFormGroupInput} ${styles.authFormGroupInputEmail}`} type="email" maxLength={40} placeholder="Email" required={true} ref={emailRef}/>
          <label htmlFor="title" className={styles.authFormGroupLabel}>Email</label>
          {error && <span className={styles.error}>{error}</span>}
        </div>
        {/* <div className={styles.authFormGroup}>
          <input id="location" className={styles.authFormGroupInput} type="text" placeholder="Password" required="true"/>
          <label htmlFor="location" className={styles.authFormGroupLabel}>Password</label>
       </div> */}
        <button className={styles.authFormButton} > Submit</button>
        {/* <button className={styles.authFormButton} > </button> */}
      </form>
    </div>
  )
}