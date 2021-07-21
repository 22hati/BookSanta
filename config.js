import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDTr_hQV2hrqm21gBrN4LXQjPs-57rB2A4",
  authDomain: "book-santa-878f3.firebaseapp.com",
  projectId: "book-santa-878f3",
  storageBucket: "book-santa-878f3.appspot.com",
  messagingSenderId: "861096729824",
  appId: "1:861096729824:web:cdce7b3a5fd5d29b924485",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();