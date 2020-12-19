import { useState, useEffect } from "react";
import { usersCollection } from "../data/firebase";

function useAllBreeds(userId, filterBreeds) {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setBreeds(docs);
    };

    const onError = (error) => {
      setIsLoading(false);
      setErrorMessage("There was a problem loading your breed ratings. Please try again.");
      console.error(error);
    };

    const breedref = usersCollection.doc(userId).collection("breeds");
    let unsubscribe;

    if (filterBreeds === "A") {
      unsubscribe = breedref.orderBy("rating", "desc").onSnapshot(onNext, onError);
    } else if (filterBreeds === "S") {
      unsubscribe = breedref.where("size", "==", "S").onSnapshot(onNext, onError);
    } else if (filterBreeds === "M") {
      unsubscribe = breedref.where("size", "==", "M").onSnapshot(onNext, onError);
    } else if (filterBreeds === "L") {
      unsubscribe = breedref.where("size", "==", "L").onSnapshot(onNext, onError);
    }

    return unsubscribe;
  }, [userId, filterBreeds]);

  return [breeds, isLoading, errorMessage];
}

export default useAllBreeds;
