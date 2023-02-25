// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKqAiZdS1AJOLX6rRdqOp4zcJbVYuk52M",
    authDomain: "fir-try2-4147c.firebaseapp.com",
    projectId: "fir-try2-4147c",
    storageBucket: "fir-try2-4147c.appspot.com",
    messagingSenderId: "553644260593",
    appId: "1:553644260593:web:a001f7bbf08db810873d50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = app.auth()

export default auth;