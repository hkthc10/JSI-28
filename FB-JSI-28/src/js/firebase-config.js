// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiKs1T3_HkmyGQMg7j3ub4nTv3vjC88Io",
  authDomain: "mindx-jsi-28-4b50f.firebaseapp.com",
  projectId: "mindx-jsi-28-4b50f",
  storageBucket: "mindx-jsi-28-4b50f.appspot.com",
  messagingSenderId: "497628366122",
  appId: "1:497628366122:web:5c6bbc3a074284f9530a53",
  measurementId: "G-S5G0DPXJ99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);