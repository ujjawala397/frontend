import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCWw7KoJRbcsAY-p3UMaaONpfg7xG7s_jc",
    authDomain: "spices-db.firebaseapp.com",
    databaseURL: "https://spices-db.firebaseio.com",
    projectId: "spices-db",
    storageBucket: "spices-db.appspot.com",
    messagingSenderId: "447663387355",
    appId: "1:447663387355:web:0e950846b62080c21492fe",
    measurementId: "G-206M5JMH6C"
  };
export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`); 
    // const userRef=firestore.doc('/users/XULv6YzoNCl76TLqfPEb');
    const snapShot=await userRef.get();
    console.log(snapShot);
    
    if(!snapShot.exists)
    {
      const{displayName,email}=userAuth;
      const createdAt=new Date();
    // Database entering data
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error){
        console.log('error creating user',error.message);
      }
    }
    return userRef;
};

export const addCollectionAndDocuments=async(
    collectionKey,
    objectsToAdd
    )=>{
  const collectionRef=firestore.collection(collectionKey);

  const batch =firestore.batch();
  objectsToAdd.forEach(obj=>{
    const newDocRef=collectionRef.doc();
    batch.set(newDocRef,obj);
  });
  return await batch.commit();
};


export const convertCollectionsSnapshotToMap=(collections)=>{
  const transformedCollection=collections.docs.map(doc=>{
    const{title,items}=doc.data();
    return {
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    };
  }); 
  
  console.log(transformedCollection);
  return transformedCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;
  },{});
};

firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;