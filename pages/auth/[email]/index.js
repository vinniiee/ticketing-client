import React, { useState } from "react";
import styles from "../auth.module.scss";
import { useRouter } from "next/router";
import { serverRequest } from "../../../utils";
import { useRef } from "react";
import { authorizationHandler } from "../authorizationHandler";
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
    // if(!props.userExists){
    //   console.log("Sending create user request...");
    //   const response = await serverRequest("auth/signup", "POST", {
    //     name: name,
    //     email: props.email,
    //     password: password,
    //   });
    //   if(!response.errors){
    //     router.push("/events");
    //   }
    // }
    // else{
    //     console.log("Signing in...")
    //     const response = await serverRequest("auth/signin", "POST", {
    //         email: props.email,
    //         password: password,
    //       });
    //       if(!response.errors){
    
    //         console.log("Redirecting... /events");
    //         router.push("/events");       }
    //       // console.log(response.status);
    // }
    
  };
  
  return (
    <div className={styles.auth}>
      <h1 className={styles.authHeading}>
        {" "}
        {heading}
        <span className={styles.authHeadingSpan}>{`>>>`}</span>
      </h1>
      <form className={styles.authForm} onSubmit={submitHandler}>
        {/* <div className={styles.authFormGroup}>
          <input id="name" className={styles.authFormGroupInput} type="text" maxLength={40} placeholder="Full Name" required="true"/>
          <label htmlFor="name" className={styles.authFormGroupLabel}>Name</label>
        </div>
        <div className={styles.authFormGroup}>
          <input id="title" className={styles.authFormGroupInput} type="email" maxLength={40} placeholder="Email" required="true"/>
          <label htmlFor="title" className={styles.authFormGroupLabel}>Email</label>
        </div> */}
      
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
        {/* <button className={styles.authFormButton} > </button> */}
        {/* <p>{props}</p> */}
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { email } = context.params;

  // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@",`${process.env.TICKETING_API_URI}/auth/info`);
  // const response = await fetch(`${process.env.TICKETING_API_URI}/auth/info`,{
  //   headers:{
  //     "Content-type": "application/json"
  //   },
  //   method:"POST",
  //   body:JSON.stringify()
  // });
  // console.log(response);
  // const data = await response.json();
  const data = await serverRequest("auth/info", "POST", { email });
  // console.log("1111111111",data);
  console.log("@@@@@@@@", data.user);
  // console.log(data.user?true:false);
  return {
    props: {
      email,
      data,
    },
  };
}
