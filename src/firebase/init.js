import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
apiKey: "AIzaSyBZ_fxR1HZPPEiwo1Zpyj4BKiGrCLdnUkY",
authDomain: "vue-simple-chat.firebaseapp.com",
databaseURL: "https://vue-simple-chat.firebaseio.com",
projectId: "vue-simple-chat",
storageBucket: "vue-simple-chat.appspot.com",
messagingSenderId: "411501532366"
};

const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()