import { initializeApp } from "firebase/app";
import { getAnalytics } from "@firebase/analytics";
import { firebaseConfig } from "./configuration";
 const app = initializeApp(firebaseConfig);
export const init = () => getAnalytics(app);