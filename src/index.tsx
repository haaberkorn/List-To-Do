import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import User from "./types/user";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import FirestoreApi from "./services/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXnNVxnL6dD8npsXHswql4YdebZZ2LbRI",
  authDomain: "todo-keyner.firebaseapp.com",
  projectId: "todo-keyner",
  storageBucket: "todo-keyner.appspot.com",
  messagingSenderId: "601003881318",
  appId: "1:601003881318:web:c8b4ce71596c11a1e40ea7",
  measurementId: "G-JHK3ZYFSK4",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
FirestoreApi.getInstance().init(app);

// const user:User = {name:"keyner", lastname:"luque", email:"kkekeke@hotmail.com"}
// FirestoreApi.getInstance().userNew(user);

FirestoreApi.getInstance().userNew({name:"keyner", lastname:"luque", email:"kkekeke@hotmail.com"});

const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
