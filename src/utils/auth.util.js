import { clearToken } from "./token.util.js";
import { getAuth, signOut } from "firebase/auth";
import router from "../router";

// eslint-disable-next-line no-unused-vars
export function hasAuthority(role) {
  return true;
}

export async function logout() {
  clearToken();
  const auth = getAuth();
  await signOut(auth);
  router.push({ name: "Login" });
}
