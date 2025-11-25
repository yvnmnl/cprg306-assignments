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