import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAwk8u8Wq_rPw8mq7y7TXMXBa_bfSlzz0k",
  authDomain: "stories-3e685.firebaseapp.com",
  projectId: "stories-3e685",
  storageBucket: "stories-3e685.appspot.com",
  messagingSenderId: "351514640497",
  appId: "1:351514640497:web:f7499d96a0c35c54ba5bd0"
};


firebase.initializeApp(firebaseConfig);

export default firebase
