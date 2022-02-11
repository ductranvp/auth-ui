import { getAuth, signOut } from "firebase/auth";

// eslint-disable-next-line no-unused-vars
export function hasAuthority() {
  return true;
}

export async function logout() {
  await signOut(getAuth());
}
