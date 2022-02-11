import { getAuth, onAuthStateChanged } from "firebase/auth";

export function getToken() {
  return getAuth().currentUser?.accessToken || null;
}

export function getTokenAsync() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      getAuth(),
      (user) => {
        unsubscribe();
        resolve(user?.accessToken || null);
      },
      reject
    );
  });
}
