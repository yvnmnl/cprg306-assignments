import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  if (!userId) return [];

  const itemsRef = collection(db, "users", userId, "items");
  const snapshot = await getDocs(itemsRef);

  const items = [];
  snapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return items;
}

export async function addItem(userId, item) {
  if (!userId) throw new Error("User ID is required");

  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);

  return docRef.id;
}