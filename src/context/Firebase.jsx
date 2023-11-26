import { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  RecaptchaVerifier,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  where,
  query,
  or,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useContext } from "react";
import { v4 as uuid4 } from "uuid";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAsme7Z_TWEeVtkXnZPUofaQpxrukj8IMA",
  authDomain: "labourlink-ecf07.firebaseapp.com",
  projectId: "labourlink-ecf07",
  storageBucket: "labourlink-ecf07.appspot.com",
  messagingSenderId: "72204308990",
  appId: "1:72204308990:web:ed70e1c9e22af1a822b0af",
};

// Firebase Services
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore();
const storage = getStorage(firebaseApp);

// Firebase Context
const FirebaseContext = createContext(null);

// Custom Hook for using Firebase context
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [labours, setLabours] = useState([]);
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
  });
  const getLabourData = async () => {
    const querySnapShot = await getDocs(collection(firestore, "labours"));
    let labourData = [];
    querySnapShot.forEach((doc) => {
      labourData.push(doc.data());
    });
    setLabours(labourData);
  };
  useEffect(() => {
    getLabourData();
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (u) => {
      if (u) {
        console.log("User Logged In");
        const q = query(
          collection(firestore, "users"),
          where("phone", "==", u.phoneNumber)
        );
        const querySnapShot = await getDocs(q);
        if (!querySnapShot.empty) {
          querySnapShot.forEach((doc) => {
            const userData = doc.data();
            setUser(userData);
          });
        }
      } else {
        console.log("User not logged In");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const putData = async (key, data, imageFile, doc, docType) => {
    const { email, phone, password } = data;
    const q = query(
      collection(firestore, "labours"),
      or(where("email", "==", email), where("phone", "==", phone))
    );
    const querySnapShot = await getDocs(q);

    if (!querySnapShot.empty) {
      return;
    }

    // store labor image
    const storageRef = ref(storage, `labour_pfp/${key}_${uuid4()}`);
    const imageSnapshot = await uploadBytes(storageRef, imageFile);
    const imageURL = await getDownloadURL(imageSnapshot.ref);

    // store labor document
    const docStorageRef = ref(storage, `labour_document/doc-${key}${docType}`);
    const docSnapShot = await uploadBytes(docStorageRef, doc);
    const docURL = await getDownloadURL(docSnapShot.ref);

    // get users location data
    let location = null;

    if ("geolocation" in navigator) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        location = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
      } catch (error) {
        console.error("Error getting geolocation:", error.message);
        alert(
          "Location access is required for this app. Please enable it in your browser settings."
        );
      }
    } else {
      console.error("Geolocation is not supported by this browser");
    }

    const result = await addDoc(collection(firestore, "labours"), {
      ...data,
      phone: `+91${phone}`,
      id: key,
      isDocumentVerified: false,
      imageUrl: imageURL,
      docUrl: docURL,
      lat: location ? location.lat : null,
      lon: location ? location.lon : null,
    });
    localStorage.setItem("labour_id", key);
    return result;
  };

  const userRegistration = async (key, data) => {
    const { email, phone } = data;
    const q = query(
      collection(firestore, "users"),
      or(where("email", "==", email), where("phone", "==", phone))
    );

    const querySnapShot = await getDocs(q);

    if (!querySnapShot.empty) {
      console.log("User already exists");
      return;
    }

    await OtpVerfication(phone);

    const result = await addDoc(collection(firestore, "users"), {
      ...data,
      phone: `+91${phone}`,
      id: key,
    });

    return result;
  };

  const OtpVerfication = (phone) => {
    return new Promise((resolve, reject) => {
      window.recaptchaVerifier = new RecaptchaVerifier(
        firebaseAuth,
        "recaptcha-verifier",
        {
          size: "invisible",
        }
      );
      const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(firebaseAuth, `+91${phone}`, appVerifier)
        .then((result) => {
          let userOtpInput = prompt("Enter OTP");
          result
            .confirm(userOtpInput)
            .then((result) => {
              resolve();
              return result.user;
            })
            .catch((err) => {
              console.log(err);
              reject(err);
              return;
            });
        })
        .catch((err) => {
          console.log(err);
          reject(err);
          return;
        });
    });
  };

  const loginWithPhoneNumber = async (phone) => {
    const q = query(
      collection(firestore, "users"),
      where("phone", "==", `+91${phone}`)
    );
    const querySnapShot = await getDocs(q);
    if (querySnapShot.empty) {
      throw new Error("Phone Number not Registered !!!");
    }
    window.recaptchaVerifier = new RecaptchaVerifier(
      firebaseAuth,
      "recaptcha-verifier",
      {
        size: "invisible",
      }
    );
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(firebaseAuth, `+91${phone}`, appVerifier)
      .then((result) => {
        let userOtpInput = prompt("Enter OTP");
        result
          .confirm(userOtpInput)
          .then((result) => {
            console.log("user exists, otp verified, logging user in");
            setUser(querySnapShot.docs[0].data());
          })
          .catch((err) => {
            console.log(err);
            throw new Error("Login failed !!");
          });
      })
      .catch((err) => {
        console.log(err);
        throw new Error("Something Went Wrong !!!");
      });
  };

  const logOutUser = async () => {
    await signOut(firebaseAuth);
    setUser(null);
  };

  return (
    <FirebaseContext.Provider
      value={{
        putData,
        loginWithPhoneNumber,
        labours,
        setLabours,
        userRegistration,
        user,
        setUser,
        logOutUser,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
