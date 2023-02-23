import React, { useState } from "react";
import styles from "../auth.module.scss";
import { useRouter } from "next/router";
import { authorizationHandler, serverRequest } from "../../../utils";
import { useRef } from "react";
import { useDispatch } from "react-redux";
export default function Auth(props) {
  const router = useRouter();
  const [error,setError] = useState();
  const heading = props.user ? "Sign In" : "Sign Up";
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const dispatch = useDispatch();
  const submitHandler = async (event) => {
    console.log("Inside submit handler...");
    event.preventDefault();
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    // console.log("##########",password)
    const result = await authorizationHandler({name,password,user:props.user,router,email:props.email,dispatch});
    if(result.error){
      if(heading!=="Sign Up")setError(result.error);
      else {router.replace({pathname:"/auth",query:{email:"invalid"}})}
    }
  };
  return (
    <div className={styles.auth}>
      <h1 className={styles.authHeading}>
        {" "}
        {heading}
        <span className={styles.authHeadingSpan}>{`>>>`}</span>
      </h1>
      <form className={styles.authForm} onSubmit={submitHandler}>  
       { !props.user &&
       <div className={styles.authFormGroup}>
       <input id="name" className={styles.authFormGroupInput} type="text" maxLength={40} placeholder="Full Name" required="true" ref={nameRef}/>
       <label htmlFor="name" className={styles.authFormGroupLabel}>Full Name</label>
     </div> }
        <div className={styles.authFormGroup}>
          <input
            id="password"
            className={styles.authFormGroupInput}
            type="password"
            placeholder="Password"
            required={true}
            ref={passwordRef}
            minLength="8"
            maxLength="50"
          />
          <label htmlFor="password" className={styles.authFormGroupLabel}>
            Password
          </label>
          {error && <span className={styles.error}> {error}</span>}
        </div>
        <button  className={styles.authFormButton}>Submit</button>
      </form>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { email } = context.params;
  const data = await serverRequest("auth/info", "POST", { email });
  console.log("@@@@@@@@", data.user);
  return {
    props: {
      email,
      user: data.user,
    },
  };
}