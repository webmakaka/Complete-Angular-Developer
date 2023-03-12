import firebase from 'firebase/compat/app';

export default interface IClip {
  uid: string;
  displayName: string;
  title: string;
  fileName: string;
  url: string;
  timestamp: firebase.firestore.FieldValue;
}
