
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

//Aqui vocês devem colocar as suas credenciais
const firebaseConfig = {
  apiKey: "AIzaSyBV4tM0UuzlB66QfHis6M9zrIXK9t8mc4Q",
  authDomain: "evillynmarceloifal513.firebaseapp.com",
  projectId: "evillynmarceloifal513",
  storageBucket: "evillynmarceloifal513.appspot.com",
  messagingSenderId: "83338136962",
  appId: "1:83338136962:web:d3ddc550f849835459939b",
  measurementId: "G-MJ9VTES1VE"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app)
const db = getFirestore(app);

export { app, auth, db }