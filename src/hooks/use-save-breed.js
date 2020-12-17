import { useState } from "react";
import { usersCollection } from "../data/firebase";

function useSaveBreed() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const save = async (breedData, userId, breedId) => {
    setIsSaving(true);
    setFormMessage("");

    try {
      if (breedId === undefined) {
        await usersCollection.doc(userId).collection("breeds").add(breedData);
      } else {
        await usersCollection.doc(userId).collection("breeds").doc(breedId).set(breedData);
      }
      setFormMessage("Saved successfully!");
    } catch (error) {
      setFormMessage("Something went wrong editing this breed. Please try again.");
      console.error(error);
    }

    setIsSaving(false);
  };

  return [save, isSaving, formMessage];
}

export default useSaveBreed;
