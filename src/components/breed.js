import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./error-message";
import { usersCollection } from "../data/firebase";
import "./breed.css";

function Breed(props) {
  const { id, data, userId } = props;
  const { title, releaseYear, rating, review } = data;

  const ratingString = "💜".repeat(rating) + "🤍".repeat(5 - rating);

  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteBreed = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef = usersCollection.doc(userId).collection("breeds").doc(id);
      await docRef.delete();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong while deleting. Please try again.");
      setIsDeleting(false);
    }
  };

  return (
    <div className="breed">
      <div className="breed__contents">
        <div className="breed__title">{title}</div>
        <div className="breed__rating">{ratingString}</div>
        <div className="breed__year">{releaseYear}</div>
        <div className="breed__review">{review ? review : "No review saved."}</div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="breed__button" disabled={isDeleting} onClick={deleteBreed}>
          <Delete />
        </button>
        <button className="breed__button" onClick={() => history.push(`/edit/${id}`)}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default Breed;
