import { authActions } from "../../store";
import { serverRequest } from "../../utils";

export const authorizationHandler = async (data) => {
  console.log("Handling Authorization...");
  // console.log("##########",password)
  if (!data.user) {
    console.log("Sending create user request...");
    const response = await serverRequest("auth/signup", "POST", {
      name: data.name,
      email: data.email,
      password: data.password,
    });
    if (!response.errors) {
      console.log("dispatching signin action...");
      data.dispatch(authActions.signin({ name: data.name, email: data.email }));

      data.router.replace("/events");
      return { error: false };
    } else {
      console.log("Could not create user...");
      return {error:response.errors[0].message}
    }
  } else {
    console.log("Signing in...");
    const response = await serverRequest("auth/signin", "POST", {
      email: data.email,
      password: data.password,
    });
    if (!response.errors) {
      console.log("dispatching signin action...");

      await data.dispatch(
        authActions.signin({ name: data.user.name, email: data.email })
      );

      console.log("Redirecting... /events");
      data.router.replace("/events");
      return { error: false };
    } else {
      console.log("Authorization failed!");
      return { error: "Incorrect Password. Try Again!" };
    }
  }
};
