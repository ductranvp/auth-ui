import { getAuth } from "firebase/auth";

export async function getToken() {
  const auth = await getAuth();
  return auth.currentUser?.accessToken || null;
}

export function setToken(token, rememberMe) {
  if (rememberMe) {
    localStorage.setItem("token", token);
  } else {
    sessionStorage.setItem("token", token);
  }
}

export function clearToken() {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
}
