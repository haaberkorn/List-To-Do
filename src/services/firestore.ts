import { FirebaseApp } from "@firebase/app";
import {
  getFirestore,
  Firestore,
  collection,
  getDocs,
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
    console.log("init")
    this.database = getFirestore(app);
    this.doSomething();
  }

  //Metodos y campos que necesite
  async doSomething() {
    const result = await getDocs(collection(this.database!, "users"));
    console.log(result.docs.map((doc) => doc.data()));
  }


}

export default FirestoreApi;
