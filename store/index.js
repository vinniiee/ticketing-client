import { configureStore, createSlice } from "@reduxjs/toolkit";
import styles from "../components/scss/layout.module.scss";
const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    signin(state, action) {
      console.log("Inside signin reducer...");
      console.log(
        "name,email : " + action.payload.name + ", " + action.payload.email
      );
      console.log("payload: ", action.payload);
      state.user = {
        name: action.payload.name,
        email: action.payload.email,
      };
      console.log("@@@@@@@@@", state.user);
    },
    signout(state) {
      state.user = null;
    },
  },
});
 
const navInitialState = {
  homeButtonClasses:  `${styles.button}`,
  genreButtonClasses: `${styles.button}`,
  publishButtonClasses: `${styles.button}`,
  authButtonClasses: `${styles.button}`,
};

const navSlice = createSlice({
  name: "nav",
  initialState: navInitialState,
  reducers: {
    toggleHomeButton(state, action) {
      if (action.payload.active) {
        state.homeButtonClasses = `${styles.button} ${styles.active}`;
      } else {
        state.homeButtonClasses = `${styles.button}`;
      }
    },
    toggleGenreButton(state, action) {
      if (action.payload.active) {
        state.genreButtonClasses = `${styles.button} ${styles.active}`;
      } else {
        state.genreButtonClasses = `${styles.button}`;
      }
    },
    togglePublishButton(state, action) {
        console.log("action received: ",action.payload.active);
      if (action.payload.active) {
        state.publishButtonClasses = `${styles.button} ${styles.active}`;
      } else {
        state.publishButtonClasses = `${styles.button}`;
      }
    },
    toggleAuthButton(state, action) {
      if (action.payload.active) {
        state.authButtonClasses = `${styles.button} ${styles.active}`;
      } else {
        state.authButtonClasses = `${styles.button}`;
      }
    },
  },
});

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    nav: navSlice.reducer
  },
});

export const authActions = authSlice.actions;
export const navActions = navSlice.actions;
