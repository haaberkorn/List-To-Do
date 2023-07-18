import { FirebaseApp } from "@firebase/app";
import User from "../types/user";
import {
  getFirestore,
  Firestore,
  collection,
  getDocs,
  addDoc,
} from "@firebase/firestore";

//create a singleton class
class FirestoreApi {
  private constructor() {}

  public static getInstance(): FirestoreApi {
    if (!FirestoreApi.instance) {
      FirestoreApi.instance = new FirestoreApi();
    }
    return FirestoreApi.instance;
  }

  private static instance: FirestoreApi;

  database?: Firestore;

  init(app: FirebaseApp) {
    console.log("init");
    this.database = getFirestore(app);
    this.doSomething();
  }

  //Metodos y campos que necesite
  async doSomething() {
    const result = await getDocs(collection(this.database!, "users"));
    console.log(result.docs.map((doc) => doc.data()));
  }

  async userNew(user: User) {
    const userCollection = collection(this.database!, "users");
    await addDoc(userCollection, user);
  }
}

export default FirestoreApi;
